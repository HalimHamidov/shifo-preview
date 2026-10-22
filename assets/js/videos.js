(() => {
  const root = document.querySelector('.video-showcase');
  if (!root) return;
  const choices = [...root.querySelectorAll('.video-choice')];
  const poster = root.querySelector('.video-poster');
  const image = poster.querySelector('img');
  const caption = root.querySelector('.video-caption h3');
  const count = root.querySelector('.video-count');
  const mount = root.querySelector('.video-mount');
  const error = root.querySelector('.video-error');
  const fallback = error.querySelector('a');
  let selected = 0;
  let video;

  function reset() {
    if (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
      video = undefined;
    }
    mount.replaceChildren();
    poster.hidden = false;
    error.hidden = true;
  }

  function select(index) {
    reset();
    selected = (index + choices.length) % choices.length;
    choices.forEach((button, i) => button.setAttribute('aria-pressed', String(i === selected)));
    const choice = choices[selected];
    image.src = choice.querySelector('img').src;
    caption.textContent = choice.querySelector('span').textContent;
    count.textContent = `${selected + 1} / ${choices.length}`;
    fallback.href = `https://www.youtube.com/watch?v=${choice.dataset.videoId}`;
  }

  function play() {
    if (video) return;
    const current = document.createElement('video');
    current.controls = true;
    current.playsInline = true;
    current.preload = 'metadata';
    current.poster = image.src;
    current.setAttribute('aria-label', caption.textContent);
    current.src = choices[selected].dataset.videoSrc;
    current.addEventListener('ended', () => {
      if (video !== current) return;
      select(selected + 1);
      poster.focus({ preventScroll: true });
    });
    current.addEventListener('error', () => {
      if (video !== current) return;
      reset();
      error.hidden = false;
    });
    video = current;
    mount.replaceChildren(current);
    poster.hidden = true;
    current.play().catch(() => {
      // Native controls remain available if the browser blocks autoplay.
    });
  }

  poster.addEventListener('click', play);
  choices.forEach((button, index) => button.addEventListener('click', () => { select(index); play(); }));
  root.querySelector('[data-video-prev]').addEventListener('click', () => { select(selected - 1); play(); });
  root.querySelector('[data-video-next]').addEventListener('click', () => { select(selected + 1); play(); });
  new MutationObserver(() => { caption.textContent = choices[selected].querySelector('span').textContent; })
    .observe(root.querySelector('.video-list'), { subtree: true, childList: true, characterData: true });
  select(0);
})();
