const navToggle = document.querySelector('.header__menu-toggle');
const headerNav = document.querySelector('.header__menu');

navToggle.addEventListener('click', () => {
  headerNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  headerNav.toggleAttribute('data-visible');
});
