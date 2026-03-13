/*
  ══════════════════════════════════════════════════════════
  SHARED COMPONENT BEHAVIOUR — lrooney.com
  ══════════════════════════════════════════════════════════

  Usage: <script src="/scripts/components.js" defer></script>
  ══════════════════════════════════════════════════════════
*/

/* ── ICON ROW — remove placeholder bg once image loads ── */
document.querySelectorAll('.icon-row-img').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => img.classList.add('loaded'));
  }
});
