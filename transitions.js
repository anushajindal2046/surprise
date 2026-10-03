/* =========================================================
   🌸 Romantic Page Transition Engine  —  transitions.js
   Shared across all pages of the birthday surprise site.
   ========================================================= */

(function () {
  /* ---------- Overlay & style injection ---------- */
  const OVERLAY_ID = '__page-transition-overlay__';

  function injectStyles() {
    if (document.getElementById('__pt-styles__')) return;
    const s = document.createElement('style');
    s.id = '__pt-styles__';
    s.textContent = `
      /* === Base overlay === */
      #${OVERLAY_ID} {
        position: fixed;
        inset: 0;
        z-index: 99999;
        pointer-events: none;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* === SVG clip-path wipe canvas === */
      #__pt-canvas__ {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
      }

      /* === Particle hearts on exit === */
      .pt-heart {
        position: absolute;
        font-size: var(--sz);
        opacity: 0;
        pointer-events: none;
        animation: ptHeartFly var(--dur) var(--delay) cubic-bezier(0.22,1,0.36,1) forwards;
        will-change: transform, opacity;
      }
      @keyframes ptHeartFly {
        0%   { transform: translate(0,0) scale(0.3) rotate(var(--rot0)); opacity:0; }
        15%  { opacity: 1; }
        100% { transform: translate(var(--tx), var(--ty)) scale(var(--sc)) rotate(var(--rot1)); opacity: 0; }
      }

      /* === Central pulsing heart stamp === */
      #__pt-heart-stamp__ {
        position: absolute;
        font-size: 0px;
        opacity: 0;
        z-index: 2;
        transition: none;
        pointer-events: none;
        filter: drop-shadow(0 0 24px rgba(255,80,130,0.9));
        animation: ptStampPulse 0.6s ease-out forwards;
      }
      @keyframes ptStampPulse {
        0%   { font-size: 0px; opacity: 0; }
        40%  { font-size: 90px; opacity: 1; }
        65%  { font-size: 70px; opacity: 1; }
        100% { font-size: 80px; opacity: 0.8; }
      }

      /* === Gradient wipe panel === */
      #__pt-wipe__ {
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, #b60e3d 0%, #7a0029 40%, #2a0010 100%);
        transform: scaleY(0);
        transform-origin: center center;
        transition: none;
        clip-path: circle(0% at 50% 50%);
      }
      #__pt-wipe__.expanding {
        clip-path: circle(150% at 50% 50%);
        transition: clip-path 0.55s cubic-bezier(0.4, 0, 0.2, 1);
      }
      #__pt-wipe__.collapsing {
        clip-path: circle(0% at 50% 50%);
        transition: clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* === Floating hearts on wipe === */
      .pt-wipe-heart {
        position: absolute;
        font-size: var(--sz);
        opacity: 0;
        color: rgba(255,200,220,0.6);
        animation: ptWipeHeartFloat var(--dur) var(--delay) ease-out forwards;
        pointer-events: none;
      }
      @keyframes ptWipeHeartFloat {
        0%   { opacity: 0; transform: translateY(30px) scale(0.5); }
        30%  { opacity: 0.7; }
        100% { opacity: 0; transform: translateY(-80px) scale(1.1) rotate(20deg); }
      }

      /* === Sparkle ring === */
      .pt-sparkle {
        position: absolute;
        width: var(--sz);
        height: var(--sz);
        border-radius: 50%;
        border: 2px solid rgba(255,182,193,0.7);
        opacity: 0;
        animation: ptSparkleRing var(--dur) var(--delay) ease-out forwards;
        pointer-events: none;
      }
      @keyframes ptSparkleRing {
        0%   { transform: scale(0.2); opacity: 0.9; }
        100% { transform: scale(3); opacity: 0; }
      }

      /* === Page entrance animation === */
      body.pt-entering > * {
        animation: ptEnterFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) both;
      }
      @keyframes ptEnterFadeUp {
        from { opacity: 0; transform: translateY(28px) scale(0.97); filter: blur(4px); }
        to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
      }

      /* === Shimmer overlay on enter === */
      #__pt-shimmer__ {
        position: fixed;
        inset: 0;
        z-index: 99998;
        pointer-events: none;
        background: linear-gradient(135deg,
          rgba(255,182,193,0.18) 0%,
          rgba(255,255,255,0.06) 40%,
          rgba(200,191,255,0.15) 80%,
          rgba(255,182,193,0.1) 100%
        );
        opacity: 1;
        transition: opacity 0.7s ease;
      }
      #__pt-shimmer__.done {
        opacity: 0;
      }
    `;
    document.head.appendChild(s);
  }

  /* ---------- Helper: create overlay DOM ---------- */
  function getOrCreateOverlay() {
    let ov = document.getElementById(OVERLAY_ID);
    if (!ov) {
      ov = document.createElement('div');
      ov.id = OVERLAY_ID;
      const wipe = document.createElement('div');
      wipe.id = '__pt-wipe__';
      const stamp = document.createElement('div');
      stamp.id = '__pt-heart-stamp__';
      stamp.textContent = '💗';
      ov.appendChild(wipe);
      ov.appendChild(stamp);
      document.body.appendChild(ov);
    }
    return ov;
  }

  /* ---------- Spawn exit burst hearts ---------- */
  function spawnExitHearts(overlay) {
    const emojis = ['❤️','💗','💖','✨','🌸','💕','⭐','🌟'];
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < 22; i++) {
      const h = document.createElement('span');
      h.className = 'pt-heart';
      const angle = (Math.PI * 2 * i / 22) + (Math.random() - 0.5) * 0.7;
      const dist = 80 + Math.random() * 180;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - Math.random() * 60;
      const sz = (14 + Math.random() * 18).toFixed(0) + 'px';
      const dur = (0.45 + Math.random() * 0.35).toFixed(2) + 's';
      const delay = (Math.random() * 0.15).toFixed(2) + 's';
      const sc = (0.5 + Math.random() * 0.8).toFixed(2);
      const rot0 = (Math.random() * 30 - 15).toFixed(0) + 'deg';
      const rot1 = (Math.random() * 360 - 180).toFixed(0) + 'deg';
      h.style.cssText = `left:${cx}px;top:${cy}px;--sz:${sz};--dur:${dur};--delay:${delay};--tx:${tx}px;--ty:${ty}px;--sc:${sc};--rot0:${rot0};--rot1:${rot1};`;
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      overlay.appendChild(h);
      setTimeout(() => h.remove(), 900);
    }

    // Sparkle rings
    for (let j = 0; j < 4; j++) {
      const ring = document.createElement('div');
      ring.className = 'pt-sparkle';
      const sz = (30 + j * 20) + 'px';
      ring.style.cssText = `left:${cx}px;top:${cy}px;margin-left:calc(-${sz}/2);margin-top:calc(-${sz}/2);--sz:${sz};--dur:${0.5 + j * 0.1}s;--delay:${j * 0.06}s;`;
      overlay.appendChild(ring);
      setTimeout(() => ring.remove(), 800);
    }
  }

  /* ---------- Spawn floating hearts during wipe ---------- */
  function spawnWipeHearts(wipeEl) {
    const emojis = ['💗','💕','❤️','🌸','✨'];
    for (let i = 0; i < 12; i++) {
      const h = document.createElement('span');
      h.className = 'pt-wipe-heart';
      const left = (5 + Math.random() * 90).toFixed(1) + '%';
      const top = (20 + Math.random() * 60).toFixed(1) + '%';
      const sz = (16 + Math.random() * 16).toFixed(0) + 'px';
      const dur = (0.5 + Math.random() * 0.5).toFixed(2) + 's';
      const delay = (0.05 + Math.random() * 0.35).toFixed(2) + 's';
      h.style.cssText = `left:${left};top:${top};--sz:${sz};--dur:${dur};--delay:${delay};`;
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      wipeEl.appendChild(h);
    }
  }

  /* ---------- NAVIGATE with transition ---------- */
  function navigateTo(href) {
    injectStyles();
    const overlay = getOrCreateOverlay();
    overlay.style.pointerEvents = 'all';

    const wipe = document.getElementById('__pt-wipe__');
    const stamp = document.getElementById('__pt-heart-stamp__');

    // 1. Burst hearts outward
    spawnExitHearts(overlay);

    // 2. After short delay — stamp heart + expand wipe
    setTimeout(() => {
      stamp.style.animation = 'none';
      void stamp.offsetWidth;
      stamp.style.animation = 'ptStampPulse 0.6s ease-out forwards';

      spawnWipeHearts(wipe);
      wipe.classList.remove('collapsing');
      void wipe.offsetWidth;
      wipe.classList.add('expanding');
    }, 120);

    // 3. Navigate
    setTimeout(() => {
      window.location.href = href;
    }, 620);
  }

  /* ---------- Page ENTRANCE animation ---------- */
  function playEntrance() {
    injectStyles();

    // Shimmer overlay
    const shimmer = document.createElement('div');
    shimmer.id = '__pt-shimmer__';
    document.body.appendChild(shimmer);

    // Gentle fade-up on body children
    document.body.classList.add('pt-entering');

    // Collapse any leftover wipe
    const overlay = getOrCreateOverlay();
    const wipe = document.getElementById('__pt-wipe__');
    if (wipe) {
      wipe.classList.add('expanding'); // ensure full coverage first
      void wipe.offsetWidth;
      setTimeout(() => {
        wipe.classList.remove('expanding');
        wipe.classList.add('collapsing');
      }, 30);
    }

    // Entrance heart burst from center
    setTimeout(() => {
      spawnExitHearts(overlay);
    }, 80);

    // Remove shimmer
    setTimeout(() => {
      shimmer.classList.add('done');
      setTimeout(() => shimmer.remove(), 800);
    }, 200);

    // Clean up body class
    setTimeout(() => {
      document.body.classList.remove('pt-entering');
      overlay.style.pointerEvents = 'none';
    }, 700);
  }

  /* ---------- Intercept ALL internal link navigations ---------- */
  function hookLinks() {
    document.addEventListener('click', function (e) {
      // Find closest anchor
      const a = e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) return;
      e.preventDefault();
      navigateTo(href);
    }, true);
  }

  /* ---------- Intercept window.location.href assignments ---------- */
  // We wrap buttons that use onclick="window.location.href=..." by
  // overriding navigateTo globally so pages can call it directly.
  window.__ptNavigate = navigateTo;

  /* ---------- Init ---------- */
  function init() {
    injectStyles();
    hookLinks();

    // Always play entrance on load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', playEntrance);
    } else {
      // Small defer so browser paints the page first
      requestAnimationFrame(() => setTimeout(playEntrance, 10));
    }
  }

  init();

  // Expose for pages to use
  window.ptNavigate = navigateTo;

})();
