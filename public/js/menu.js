// Menu do celular: abre e fecha sem JS (atributo popover no <nav>).
// Este script só fecha o painel quando a pessoa escolhe um link.
const menu = document.getElementById('site-menu');
if (menu && typeof menu.hidePopover === 'function') {
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a') && menu.matches(':popover-open')) menu.hidePopover();
  });
}
