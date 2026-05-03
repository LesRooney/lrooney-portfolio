(function () {
  var inView = new Set();

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (entry.isIntersecting) {
        inView.add(video);
        video.play().catch(function () {});
      } else {
        inView.delete(video);
        video.pause();
        video.currentTime = 0;
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.video-wrap video').forEach(function (video) {
    obs.observe(video);

    // After hover-end (hover JS pauses+resets on mouseleave), restart if still in viewport
    var wrap = video.closest('.video-wrap');
    if (wrap) {
      wrap.addEventListener('mouseleave', function () {
        setTimeout(function () {
          if (inView.has(video) && video.paused) {
            video.play().catch(function () {});
          }
        }, 150);
      });
    }
  });

  // Pause all when tab is hidden; resume in-view ones when visible again
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      inView.forEach(function (v) { v.pause(); });
    } else {
      inView.forEach(function (v) { v.play().catch(function () {}); });
    }
  });
})();
