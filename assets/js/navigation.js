(() => {
  if (location.hash) history.scrollRestoration = 'manual';
  const groups = [...document.querySelectorAll('.site-submenu')];
  groups.forEach(group => {
    group.addEventListener('toggle', () => {
      if (group.open) groups.forEach(other => { if (other !== group) other.open = false; });
    });
  });
  document.addEventListener('click', event => {
    groups.forEach(group => {
      if (!group.contains(event.target) || event.target.closest('a')) group.open = false;
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const group = groups.find(group => group.open && group.contains(document.activeElement));
    groups.forEach(group => { group.open = false; });
    group?.querySelector('summary').focus();
  });
  let routes;
  const redirectLegacyAnchor = async () => {
    if (!document.body.classList.contains('is-home')) return;
    const id = location.hash.slice(1);
    if (!id || ['top', 'about', 'procedures'].includes(id)) return;
    routes ??= await fetch('assets/js/legacy-routes.json').then(response => response.json());
    if (routes[id]) location.replace(routes[id]);
  };
  addEventListener('hashchange', () => { redirectLegacyAnchor().catch(() => {}); });
  redirectLegacyAnchor().catch(() => {});
  addEventListener('load', () => {
    document.fonts.ready.then(() => {
      const id = decodeURIComponent(location.hash.slice(1));
      requestAnimationFrame(() => {
        if (id) document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' });
      });
    });
  }, { once: true });
})();
