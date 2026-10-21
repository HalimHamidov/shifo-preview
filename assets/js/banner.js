(() => {
  const hero = document.querySelector('[data-banner]');
  if (!hero) return;
  const slides = [...hero.querySelectorAll('.banner-slide')];
  const header = document.querySelector('.site-header');
  const bottomNav = document.querySelector('.mobile-bottom');
  const controls = hero.querySelector('.banner-controls');
  const pause = controls.querySelector('[data-banner-pause]');
  const count = controls.querySelector('.banner-count');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = reducedMotion.matches;
  let timer;
  const updateSize = () => {
    hero.style.setProperty('--banner-header-height', `${header?.offsetHeight || 74}px`);
    const bottom = bottomNav && getComputedStyle(bottomNav).position === 'fixed' && getComputedStyle(bottomNav).display !== 'none' ? bottomNav.offsetHeight : 0;
    hero.style.setProperty('--banner-bottom-height', `${bottom}px`);
  };
  const show = index => {
    current = (index + slides.length + 1) % (slides.length + 1);
    slides.forEach((slide, i) => { slide.hidden = current !== i + 1; });
    hero.classList.toggle('has-banner-slide', current > 0);
    hero.querySelector('.hero-actions').inert = current > 0;
    count.textContent = `${current + 1} / ${slides.length + 1}`;
  };
  const updatePause = () => {
    pause.setAttribute('aria-pressed', String(!paused));
    pause.querySelector('span').textContent = paused ? '▶' : 'Ⅱ';
  };
  const start = () => {
    clearInterval(timer);
    if (paused) return;
    timer = setInterval(() => {
      if (document.hidden || hero.getBoundingClientRect().bottom <= 0) return;
      if (hero.contains(document.activeElement) && !controls.contains(document.activeElement)) return;
      show(current + 1);
    }, 18000);
  };
  const move = step => { paused = true; show(current + step); updatePause(); start(); };
  controls.querySelector('[data-banner-prev]').addEventListener('click', () => move(-1));
  controls.querySelector('[data-banner-next]').addEventListener('click', () => move(1));
  pause.addEventListener('click', () => { paused = !paused; updatePause(); start(); });
  controls.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  });
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updatePause(); start(); });
  new ResizeObserver(updateSize).observe(header);
  addEventListener('resize', updateSize);
  updateSize();
  show(0);
  updatePause();
  start();
})();
