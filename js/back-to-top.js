(function () {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'back-to-top-btn';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="6 14 12 8 18 14"></polyline></svg>';
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(btn);

  var threshold = 400;
  function update() {
    if (window.scrollY > threshold) btn.classList.add('is-visible');
    else btn.classList.remove('is-visible');
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
