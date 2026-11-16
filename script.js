const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('img[data-photo]').forEach(photo => {
  photo.addEventListener('load', () => photo.parentElement.classList.add('has-photo'));
  if (photo.complete && photo.naturalWidth > 0) photo.parentElement.classList.add('has-photo');
});
