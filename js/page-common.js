(function () {
  // Nav scroll border
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Custom cursor dot + ring (only on pages that include the elements)
  var dot  = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) return;

  var mx = -100, my = -100, rx = -100, ry = -100;
  var hoverTargets = 'a, button, [role="button"]';

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate(' + (mx - 3) + 'px, ' + (my - 3) + 'px)';
  });
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverTargets)) { ring.classList.add('is-hovering'); dot.classList.add('is-hovering'); }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverTargets)) { ring.classList.remove('is-hovering'); dot.classList.remove('is-hovering'); }
  });
  document.addEventListener('mousedown', function () { ring.classList.add('is-clicking'); });
  document.addEventListener('mouseup',   function () { ring.classList.remove('is-clicking'); });
  document.addEventListener('mouseleave', function () { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', function () { dot.style.opacity = '1'; ring.style.opacity = '1'; });

  (function loop() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = 'translate(' + (rx - 15) + 'px, ' + (ry - 15) + 'px)';
    requestAnimationFrame(loop);
  })();
})();
