#!/usr/bin/env node
/**
 * token-audit.js — Design token compliance checker for lrooney.com
 *
 * Scans all CSS and HTML <style> blocks for hardcoded values that
 * should reference tokens from styles/tokens.css instead.
 *
 * Usage:  node scripts/token-audit.js
 * Exit:   0 = clean, 1 = errors found
 *
 * Errors   — hardcoded hex colours, known-bad values → must fix
 * Warnings — raw rgba/rgb that might need a named token → review
 */

'use strict';
const fs   = require('fs');
const path = require('path');

/* ─── config ─────────────────────────────────────────────────────── */

const ROOT = path.resolve(__dirname, '..');

// HTML files to scan
const HTML_FILES = fs.readdirSync(ROOT)
  .filter(f => f.endsWith('.html') && !f.startsWith('icon-'))
  .map(f => path.join(ROOT, f));

// CSS files to scan (skip tokens.css — it IS the source of truth)
const CSS_FILES = fs.readdirSync(path.join(ROOT, 'styles'))
  .filter(f => f.endsWith('.css') && f !== 'tokens.css')
  .map(f => path.join(ROOT, 'styles', f));

// Known token suggestions (lowercase keys for case-insensitive match)
const TOKEN_MAP = {
  '#0a0a0a':  '--ink',
  '#1a1a18':  '--color-off-black',
  '#4a4a4a':  '--ink-mid',
  '#717171':  '--ink-light',
  '#fdfdfc':  '--paper',
  '#efede7':  '--paper-alt',
  '#f5f3ef':  '--faint',
  '#f0f0f0':  '--color-scrubber-track',
  '#e2e0d8':  '--rule',
  '#2563eb':  '--color-link',
  '#1d4ed8':  '--color-link-hover',
  '#3b82f6':  '--color-blue',
  '#1c88e5':  '--primitive-blue-650',
  '#008ff0':  '--color-blue-bright',
  '#0070bf':  '--color-blue-800',
  '#1e3a5f':  '--color-navy',
  '#c97b63':  '--color-salmon',
  '#e53e3e':  '--red',
  '#fffbcc':  '--color-highlight',
  '#000':     '--ink  (or var(--primitive-black))',
  '#fff':     '--paper  (or var(--primitive-white))',
};

/* ─── helpers ────────────────────────────────────────────────────── */

// Remove :root { … } blocks from CSS text (replace with blank space,
// preserving line count so line numbers stay accurate)
function blankOutRootBlocks(css) {
  return css.replace(/:root\s*\{[^}]*\}/g, match =>
    match.replace(/[^\n]/g, ' ')
  );
}

// Count newlines before offset to get 1-based line number
function lineAt(text, offset) {
  return text.slice(0, offset).split('\n').length;
}

// Extract <style> block contents + their start line from an HTML string
function extractStyleBlocks(html) {
  const blocks = [];
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push({
      css:        m[1],
      lineOffset: lineAt(html, html.indexOf(m[1], m.index)),
    });
  }
  return blocks;
}

// Scan a CSS string for violations; lineOffset = line number of css[0]
function scanCSS(css, lineOffset) {
  const issues = [];
  const clean  = blankOutRootBlocks(css);
  const lines  = clean.split('\n');

  lines.forEach((raw, i) => {
    const line    = raw;
    const lineNum = lineOffset + i;
    const trimmed = line.trim();

    // Skip blank / comment-only lines
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return;

    // ── Hex colours ─────────────────────────────────────────────────
    // Require a CSS-value character before # so ID selectors (#nav) are skipped
    const hexRe = /(?<=[:,()\s"'])#([0-9a-fA-F]{3,6})\b/g;
    let m;
    while ((m = hexRe.exec(line)) !== null) {
      const hex   = '#' + m[1];
      // Skip 3-char shorthands that are probably not colours (#fff, #000 are caught separately)
      const token = TOKEN_MAP[hex.toLowerCase()];
      const fix   = token ? `var(${token})` : 'add a token to tokens.css';
      issues.push({ type: 'error', line: lineNum, value: hex, fix, context: trimmed.slice(0, 72) });
    }

    // ── Raw rgba / rgb ───────────────────────────────────────────────
    // Flag if the value is NOT already wrapped in var()
    const rgbaRe = /\brgba?\([^)]+\)/g;
    while ((m = rgbaRe.exec(line)) !== null) {
      // Skip lines that are token definitions (already inside :root, but double-check)
      if (trimmed.startsWith('--')) continue;
      issues.push({
        type:    'warning',
        line:    lineNum,
        value:   m[0].length > 44 ? m[0].slice(0, 41) + '…' : m[0],
        fix:     'consider a --shadow-* or named overlay token in tokens.css',
        context: trimmed.slice(0, 72),
      });
    }
  });

  return issues;
}

/* ─── main ───────────────────────────────────────────────────────── */

const results   = {}; // relPath → issue[]
let totalErrors = 0;
let totalWarns  = 0;

for (const file of CSS_FILES) {
  const css     = fs.readFileSync(file, 'utf8');
  const rel     = path.relative(ROOT, file);
  const issues  = scanCSS(css, 1);
  if (issues.length) {
    results[rel] = issues;
    totalErrors += issues.filter(i => i.type === 'error').length;
    totalWarns  += issues.filter(i => i.type === 'warning').length;
  }
}

for (const file of HTML_FILES) {
  const html    = fs.readFileSync(file, 'utf8');
  const rel     = path.relative(ROOT, file);
  const issues  = [];
  for (const { css, lineOffset } of extractStyleBlocks(html)) {
    issues.push(...scanCSS(css, lineOffset));
  }
  if (issues.length) {
    results[rel] = issues;
    totalErrors += issues.filter(i => i.type === 'error').length;
    totalWarns  += issues.filter(i => i.type === 'warning').length;
  }
}

/* ─── output ─────────────────────────────────────────────────────── */

const R = '\x1b[0m';
const B = '\x1b[1m';
const D = '\x1b[2m';
const RED    = '\x1b[31m';
const YELLOW = '\x1b[33m';
const GREEN  = '\x1b[32m';
const CYAN   = '\x1b[36m';

console.log('\n' + B + '🔍 Token Audit — lrooney.com' + R);
console.log(D + '─'.repeat(64) + R);

if (Object.keys(results).length === 0) {
  console.log('\n' + GREEN + B + '✅  All clear. No hardcoded values found.' + R + '\n');
  process.exit(0);
}

for (const [file, issues] of Object.entries(results)) {
  const errs  = issues.filter(i => i.type === 'error').length;
  const warns = issues.filter(i => i.type === 'warning').length;
  const badge = [
    errs  ? RED    + errs  + ' error'   + (errs  !== 1 ? 's' : '') + R : '',
    warns ? YELLOW + warns + ' warning' + (warns !== 1 ? 's' : '') + R : '',
  ].filter(Boolean).join('  ');

  console.log('\n' + B + CYAN + '  ' + file + R + '  ' + badge);

  for (const iss of issues) {
    if (iss.type === 'error') {
      console.log(
        RED + '  ✗' + R + ' ' + D + 'line ' + iss.line + R +
        '  ' + B + iss.value + R +
        D + '  →  ' + R + iss.fix
      );
    } else {
      console.log(
        YELLOW + '  ⚠' + R + ' ' + D + 'line ' + iss.line + R +
        '  ' + iss.value +
        D + '  →  ' + iss.fix + R
      );
    }
  }
}

console.log('\n' + D + '─'.repeat(64) + R);

const summary = [
  totalErrors ? RED    + B + totalErrors + ' error'   + (totalErrors !== 1 ? 's' : '') + R : '',
  totalWarns  ? YELLOW + B + totalWarns  + ' warning' + (totalWarns  !== 1 ? 's' : '') + R : '',
].filter(Boolean).join('  ');

console.log('  ' + summary);
console.log(D + '  Errors must be fixed. Warnings are advisory.\n' + R);

process.exit(totalErrors > 0 ? 1 : 0);
