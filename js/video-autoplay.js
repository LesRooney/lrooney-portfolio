(function () {
  var inView = new Set();

  function getWrap(video) {
    return video.closest('.video-wrap') ||
           video.closest('.hover-reveal') ||
           (video.id === 'loom-video' ? document.getElementById('loom-reveal') : null);
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      var wrap  = getWrap(video);
      if (entry.isIntersecting) {
        inView.add(video);
        // Don't auto-resume if the user manually paused
        if (!wrap || !wrap.classList.contains('is-paused')) {
          video.play().catch(function () {});
        }
      } else {
        inView.delete(video);
        video.pause();
        video.currentTime = 0;
        // Clear user-paused state so it auto-plays next time it scrolls in
        if (wrap) wrap.classList.remove('is-paused');
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.video-wrap video').forEach(function (video) {
    obs.observe(video);

    // After hover-end, restart if still in viewport and not manually paused
    var wrap = video.closest('.video-wrap');
    if (wrap) {
      wrap.addEventListener('mouseleave', function () {
        setTimeout(function () {
          if (inView.has(video) && video.paused && !wrap.classList.contains('is-paused')) {
            video.play().catch(function () {});
          }
        }, 150);
      });
    }
  });

  // Also observe loom-video (lives inside .hover-reveal, not .video-wrap)
  var loomVideo = document.getElementById('loom-video');
  if (loomVideo) {
    obs.observe(loomVideo);
  }

  // Pause all when tab is hidden; resume in-view ones when visible again
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      inView.forEach(function (v) { v.pause(); });
    } else {
      inView.forEach(function (v) {
        var wrap = getWrap(v);
        if (!wrap || !wrap.classList.contains('is-paused')) {
          v.play().catch(function () {});
        }
      });
    }
  });
})();
