#!/usr/bin/env node
/**
 * avif-convert.js
 * 1. Finds every local img src (.webp/.jpg/.jpeg/.png) across all HTML files
 * 2. Converts each to AVIF via ffmpeg (skips if .avif already exists)
 * 3. Wraps each <img> in a <picture> element with the AVIF <source> (skips if already wrapped)
 *
 * Run from repo root: node scripts/avif-convert.js
 */

const fs   = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

// ── Config ────────────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, '..');
const HTML_FILES = [
  'index.html',
  'influence.html',
  'password.html',
  'coming-soon.html',
  'coming-soon-fire-tracker.html',
  'coming-soon-playground.html',
  'medidataedcredesign.html',
  'contech-qflow.html',
  'qualisflow-02.html',
  'clinical-risk-based-monitoring.html',
  'homerenter.html',
  'lesleyrooney-games-sims-vfxworks.html',
  'games-simulations-films.html',
];

// Skip external URLs and already-AVIF files; also skip tiny UI icons
const SKIP_PATTERNS = [
  /^https?:\/\//,        // external URLs
  /\.avif$/i,            // already AVIF
  /\.svg$/i,             // SVGs (no conversion needed)
  /\/icons\//,           // small UI icons (16–32px, negligible saving)
  /\/Mockups\//,         // laptop/device SVG frames
  /favicon/i,
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function shouldSkip(src) {
  return SKIP_PATTERNS.some(p => p.test(src));
}

/** Decode %20-style URL encoding in a path */
function decodeSrc(src) {
  return decodeURIComponent(src);
}

/** Convert src="images/foo.webp" → src="images/foo.avif" */
function avifSrc(src) {
  return src.replace(/\.(webp|jpg|jpeg|png)$/i, '.avif');
}

/** Convert a file to AVIF if not already done. Returns true on success. */
function convertToAvif(relSrc) {
  const decoded  = decodeSrc(relSrc);
  const srcAbs   = path.join(ROOT, decoded);
  const avifRel  = avifSrc(decoded);
  const avifAbs  = path.join(ROOT, avifRel);

  if (!fs.existsSync(srcAbs)) {
    console.warn(`  ⚠  File not found, skipping: ${decoded}`);
    return false;
  }
  if (fs.existsSync(avifAbs)) {
    return true; // already done
  }

  const result = spawnSync('ffmpeg', [
    '-y', '-i', srcAbs,
    '-c:v', 'libsvtav1',
    '-crf', '32',
    '-b:v', '0',
    '-preset', '8',
    avifAbs,
  ], { stdio: ['ignore', 'pipe', 'pipe'] });

  if (result.status !== 0) {
    console.error(`  ✗  ffmpeg failed for ${decoded}`);
    console.error(result.stderr.toString().slice(-200));
    return false;
  }

  const origKB = Math.round(fs.statSync(srcAbs).size / 1024);
  const avifKB = Math.round(fs.statSync(avifAbs).size / 1024);
  const pct    = Math.round((avifKB / origKB) * 100);
  console.log(`  ✓  ${path.basename(decoded)}: ${origKB}KB → ${avifKB}KB (${pct}%)`);
  return true;
}

/**
 * Wrap every bare <img> whose src converts to AVIF in a <picture> element.
 * Already-wrapped imgs (inside <picture>) are left alone.
 */
function wrapInPicture(html) {
  // Match <picture>...</picture> blocks and replace them with placeholders
  // so we don't double-wrap imgs that are already inside <picture>.
  const PICTURE_PLACEHOLDER = '\x00PICTURE\x00';
  const pictures = [];

  let safe = html.replace(/<picture[\s\S]*?<\/picture>/gi, (match) => {
    pictures.push(match);
    return PICTURE_PLACEHOLDER + (pictures.length - 1) + '\x00';
  });

  // Now wrap every remaining <img> that has a local convertible src
  safe = safe.replace(
    /<img(\s[^>]*?)>/gi,
    (imgTag, attrs) => {
      // Extract src value
      const srcMatch = attrs.match(/\bsrc="([^"]*)"/i);
      if (!srcMatch) return imgTag;
      const src = srcMatch[1];
      if (shouldSkip(src)) return imgTag;

      const ext = src.match(/\.(webp|jpg|jpeg|png)$/i);
      if (!ext) return imgTag;

      const avif = avifSrc(src);
      const avifAbs = path.join(ROOT, decodeSrc(avif));
      if (!fs.existsSync(avifAbs)) return imgTag; // conversion failed, leave as-is

      return `<picture>\n                <source srcset="${avif}" type="image/avif">\n                <img${attrs}>\n              </picture>`;
    }
  );

  // Restore <picture> blocks
  safe = safe.replace(/\x00PICTURE\x00(\d+)\x00/g, (_, i) => pictures[i]);

  return safe;
}

// ── Main ──────────────────────────────────────────────────────────────────────
(async () => {
  // 1. Collect all unique local image srcs
  console.log('\n── Step 1: Collecting image paths ──────────────────────────────\n');
  const allSrcs = new Set();

  for (const file of HTML_FILES) {
    const filePath = path.join(ROOT, file);
    if (!fs.existsSync(filePath)) continue;
    const html = fs.readFileSync(filePath, 'utf8');
    const matches = html.matchAll(/\bsrc="([^"]*)"/gi);
    for (const m of matches) {
      const src = m[1];
      if (!shouldSkip(src) && /\.(webp|jpg|jpeg|png)$/i.test(src)) {
        allSrcs.add(src);
      }
    }
  }

  console.log(`Found ${allSrcs.size} unique images to process.\n`);

  // 2. Convert all to AVIF
  console.log('── Step 2: Converting to AVIF ──────────────────────────────────\n');
  let converted = 0, skipped = 0, failed = 0;

  for (const src of allSrcs) {
    const decoded = decodeSrc(src);
    const avifAbs = path.join(ROOT, avifSrc(decoded));
    if (fs.existsSync(avifAbs)) {
      skipped++;
      continue;
    }
    const ok = convertToAvif(src);
    if (ok) converted++; else failed++;
  }

  console.log(`\n  Converted: ${converted}  Already done: ${skipped}  Failed: ${failed}\n`);

  // 3. Update HTML files
  console.log('── Step 3: Wrapping <img> tags in <picture> ────────────────────\n');

  for (const file of HTML_FILES) {
    const filePath = path.join(ROOT, file);
    if (!fs.existsSync(filePath)) continue;
    const before = fs.readFileSync(filePath, 'utf8');
    const after  = wrapInPicture(before);
    if (before !== after) {
      fs.writeFileSync(filePath, after, 'utf8');
      const count = (after.match(/<picture>/gi) || []).length - (before.match(/<picture>/gi) || []).length;
      console.log(`  ✓  ${file} — added ${count} <picture> wrapper(s)`);
    } else {
      console.log(`  –  ${file} — no changes`);
    }
  }

  console.log('\n── Done ────────────────────────────────────────────────────────\n');
})();
