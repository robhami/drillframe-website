const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    menuButton?.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

const applicationLink = document.querySelector('.application-enlarge');
const applicationDialog = document.querySelector('#application-lightbox');
if (applicationLink && typeof applicationDialog?.showModal === 'function') {
  applicationLink.addEventListener('click', event => {
    event.preventDefault();
    applicationDialog.showModal();
    document.body.classList.add('lightbox-open');
  });
  applicationDialog.querySelector('.lightbox-close').addEventListener('click', () => applicationDialog.close());
  applicationDialog.addEventListener('click', event => {
    if (event.target === applicationDialog) {
      const bounds = applicationDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) applicationDialog.close();
    }
  });
  applicationDialog.addEventListener('close', () => {
    document.body.classList.remove('lightbox-open');
    applicationLink.focus({ preventScroll: true });
  });
}
