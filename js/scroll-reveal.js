(function () {
  var sel = '.img-card, .postit, .gif-item, .video-wrap, .img-pair, .cs-caption, .reveal';
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(sel).forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('in-view');
    } else {
      revealObs.observe(el);
    }
  });
})();
