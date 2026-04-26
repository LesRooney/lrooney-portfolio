(function () {
  var imageLike   = '.img-card, .video-wrap, .gif-item, .img-pair, .reveal';
  var description = '.cs-caption, .postit';
  var allSel      = imageLike + ', ' + description;
  var perItemMs   = 110; // stagger between siblings in a grid

  // Returns extra delay (ms) only when this element is one of multiple image-like siblings under the same parent
  function gridStaggerMs(el) {
    if (!el.matches(imageLike)) return 0;
    var parent = el.parentElement;
    if (!parent) return 0;
    var siblings = Array.prototype.filter.call(parent.children, function (c) {
      return c.matches && c.matches(imageLike);
    });
    if (siblings.length < 2) return 0; // single image / video → no stagger, slide-up plays solo
    return siblings.indexOf(el) * perItemMs;
  }

  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = gridStaggerMs(el);
      if (delay) el.style.transitionDelay = (delay / 1000) + 's';
      el.classList.add('in-view');
      revealObs.unobserve(el);
    });
  }, { threshold: 0.08 }); // low threshold so the slide-up is visible as element enters viewport

  document.querySelectorAll(allSel).forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('in-view');
    } else {
      revealObs.observe(el);
    }
  });
})();
