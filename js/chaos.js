// Responsive Chaos Mode: a glorious 1999 personality that reshapes itself
// for every screen size (and lets you drag windows around on desktop).
import { $, $$, toast, emit } from './util.js';
import { sfx } from './audio.js';

export function initChaos({ pip }) {
  const root = document.documentElement;
  const btn = $('#tbChaos');
  const wins = $$('[data-win]');
  const titles = $$('.sec-title');
  let lastW = innerWidth;
  let resizeT;

  const sizeName = (w) => (w < 480 ? 'pocket-sized' : w < 700 ? 'phone-ish' : w < 1100 ? 'scrapbook' : w < 1600 ? 'BIG' : 'ENORMOUS');

  function layout() {
    const w = innerWidth;
    const k = w < 700 ? 0.6 : w < 1100 ? 1.1 : 1.6;
    wins.forEach((el, i) => {
      if (el.dataset.dragged) return;
      const rot = ((((i * 37) % 9) - 4) * k * 0.6).toFixed(2);
      const dx = w >= 1100 ? (i % 2 ? 1 : -1) * (20 + ((i * 29) % 50)) : 0;
      el.style.setProperty('--rot', `${rot}deg`);
      el.style.setProperty('--dx', `${dx}px`);
    });
    titles.forEach((t, i) => t.style.setProperty('--chaos-tilt', `${(i % 2 ? 1 : -1) * (1 + k)}deg`));
  }

  function clear() {
    wins.forEach((el) => { el.style.removeProperty('--rot'); el.style.removeProperty('--dx'); el.style.removeProperty('translate'); delete el.dataset.dragged; });
  }

  function set(on, announce) {
    root.classList.toggle('chaos', on);
    try { localStorage.setItem('pip.chaos', on ? '1' : '0'); } catch { /* fine */ }
    btn.setAttribute('aria-pressed', String(on));
    btn.querySelector('.tb-l').textContent = on ? 'CHAOS!' : 'chaos';
    if (on) layout(); else clear();
    if (!announce) return;
    if (on) {
      sfx.big();
      emit('burst', { x: innerWidth / 2, y: innerHeight / 2, n: 80 });
      toast(`✺ CHAOS MODE ✺ ur screen is ${innerWidth}px wide: ${sizeName(innerWidth)} chaos!`, 3600);
      const p = pip();
      if (p) p.say('WHEEEE!!! ✺', 2500);
    } else {
      sfx.boop();
      toast('phew. tidy again ♡');
    }
  }

  btn.addEventListener('click', () => set(!root.classList.contains('chaos'), true));
  set(root.classList.contains('chaos'), false);

  // the layout reshapes to every screen, and Pip notices when you resize
  addEventListener('resize', () => {
    if (!root.classList.contains('chaos')) return;
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      layout();
      if (Math.abs(innerWidth - lastW) > 60) {
        toast(`ooh! ${innerWidth}×${innerHeight}: now it's ${sizeName(innerWidth)} chaos`, 2200);
        lastW = innerWidth;
      }
    }, 200);
  });

  // drag windows by their title bar (mouse / pen only, so phones can still scroll)
  wins.forEach((el) => {
    const bar = el.querySelector('.win-bar');
    if (!bar) return;
    let sx = 0, sy = 0, ox = 0, oy = 0, dragging = false;
    bar.addEventListener('pointerdown', (e) => {
      if (!root.classList.contains('chaos') || e.pointerType === 'touch' || e.target.closest('i, button')) return;
      dragging = true;
      el.classList.add('dragging');
      const [tx, ty] = (el.style.translate || '0px 0px').split(' ').map(parseFloat);
      ox = tx || 0; oy = ty || 0; sx = e.clientX; sy = e.clientY;
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      el.style.translate = `${ox + e.clientX - sx}px ${oy + e.clientY - sy}px`;
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove('dragging');
      el.dataset.dragged = '1';
    };
    bar.addEventListener('pointerup', end);
    bar.addEventListener('pointercancel', end);
  });
}
