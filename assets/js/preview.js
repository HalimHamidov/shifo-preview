// Keep the original header over the hero; use a white header below it.
(() => {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  if (!header) return;
  let scheduled = false;
  const update = () => {
    document.documentElement.style.setProperty('--actual-header-height', `${header.offsetHeight}px`);
    header.classList.toggle('is-past-hero', !hero || hero.getBoundingClientRect().bottom <= header.offsetHeight + 1);
    scheduled = false;
  };
  addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  addEventListener('resize', update);
  addEventListener('pageshow', update);
  update();
})();
