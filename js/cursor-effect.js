(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  var CONFIG = {
    cursorSize:      6,
    cursorRadius:    2,
    cursorColor:     'rgba(0, 0, 0, 1)',
    lerpFactor:      0.14,
    particleSizeMin: 1,
    particleSizeMax: 2.5,
    particleColor:   'rgba(0, 0, 0, 1)',
    lifespanMin:     25,
    lifespanMax:     50,
    driftSpeedMin:   0.3,
    driftSpeedMax:   1.5,
    spawnEvery:      2,   // spawn 1 particle every Nth mousemove
  };

  // ── Hide native cursor; restore pointer on interactive elements ─
  var style = document.createElement('style');
  style.textContent = [
    '*, *::before, *::after { cursor: none !important; }',
    'a, a *, button, button *, [role="button"], [role="button"] *,',
    'input, select, textarea, label, [tabindex],',
    '.card-item, .card-item *, .ipad-frame, .ipad-frame *,',
    '.deco-group-books, .deco-group-books *,',
    '.deco-group-tv-screen, .nav-dropdown-trigger, .footer-right a',
    '{ cursor: pointer !important; }',
  ].join('\n');
  document.head.appendChild(style);

  // ── Canvas ──────────────────────────────────────────────────────
  var canvas = document.createElement('canvas');
  canvas.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'width:100%',
    'height:100%',
    'z-index:99999',
    'pointer-events:none',
  ].join(';');
  document.body.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var dpr = window.devicePixelRatio || 1;

  function resize() {
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // ── State ───────────────────────────────────────────────────────
  var mouseX = -200, mouseY = -200;
  var curX   = -200, curY   = -200;
  var particles  = [];
  var moveCount  = 0;
  var isOverInteractive = false;

  var INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, [tabindex], .card-item, .ipad-frame, .deco-group-books, .deco-group-tv-screen, .nav-dropdown-trigger, .footer-right a';

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(INTERACTIVE)) isOverInteractive = true;
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(INTERACTIVE)) isOverInteractive = false;
  });

  window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    moveCount++;
    if (moveCount % CONFIG.spawnEvery === 0) spawnParticle();
  });

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function spawnParticle() {
    var dir  = Math.random() < 0.5 ? -1 : 1;
    var life = Math.round(rand(CONFIG.lifespanMin, CONFIG.lifespanMax));
    particles.push({
      x:        curX,
      y:        curY,
      vx:       dir * rand(CONFIG.driftSpeedMin, CONFIG.driftSpeedMax),
      vy:       rand(-0.15, 0.15),
      size:     rand(CONFIG.particleSizeMin, CONFIG.particleSizeMax),
      rotation: rand(0, Math.PI * 2),
      rotSpeed: rand(-0.08, 0.08),
      life:     life,
      maxLife:  life,
    });
  }

  // ── Render loop ─────────────────────────────────────────────────
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Lerp cursor
    curX += (mouseX - curX) * CONFIG.lerpFactor;
    curY += (mouseY - curY) * CONFIG.lerpFactor;

    // Particles
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.x  += p.vx;
      p.y  += p.vy;
      p.rotation += p.rotSpeed;
      p.life--;

      if (p.life <= 0) { particles.splice(i, 1); continue; }

      var progress  = p.life / p.maxLife;       // 1 → 0
      var alpha     = progress;
      var drawSize  = p.size * progress;

      if (drawSize < 0.3) continue;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = alpha * 0.65;
      ctx.fillStyle   = CONFIG.particleColor;
      ctx.fillRect(-drawSize / 2, -drawSize / 2, drawSize, drawSize);
      ctx.restore();
    }

    // Squircle cursor — always visible
    var half = CONFIG.cursorSize / 2;
    ctx.globalAlpha = 1;
    ctx.fillStyle   = CONFIG.cursorColor;
    ctx.beginPath();
    ctx.roundRect(curX - half, curY - half, CONFIG.cursorSize, CONFIG.cursorSize, CONFIG.cursorRadius);
    ctx.fill();

    requestAnimationFrame(loop);
  }

  loop();
})();
