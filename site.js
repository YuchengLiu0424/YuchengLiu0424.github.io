const viewer = document.querySelector('.figure-viewer');
const enlarged = viewer.querySelector('img');
const caption = viewer.querySelector('.figure-viewer-caption');
let trigger;
document.querySelectorAll('.paper-figure a').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    trigger = link;
    const figure = link.closest('figure');
    const source = figure.querySelector('img');
    enlarged.src = source.src;
    enlarged.alt = source.alt;
    caption.textContent = figure.querySelector('figcaption').firstChild.textContent.trim();
    viewer.showModal();
    document.body.classList.add('figure-open');
    viewer.querySelector('button').focus();
  });
});
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target !== viewer) return;
  const rect = viewer.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
});
viewer.addEventListener('close', () => {
  document.body.classList.remove('figure-open');
  trigger?.focus({ preventScroll: true });
});
