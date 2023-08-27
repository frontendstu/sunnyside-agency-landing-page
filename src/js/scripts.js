const headerMenuToggle = document.querySelector('.header-primary__toggle');
const headerMenuNav = document.querySelector('#header-primary-nav');

headerMenuToggle.addEventListener('click', () => {
  headerMenuNav.hasAttribute('data-visible')
    ? headerMenuToggle.setAttribute('aria-expanded', false)
    : headerMenuToggle.setAttribute('aria-expanded', true);
  headerMenuNav.toggleAttribute('data-visible');
});
