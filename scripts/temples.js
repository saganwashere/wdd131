document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('#menuButton');
    const navMenu = document.querySelector('#navMenu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            menuButton.textContent = isOpen ? '✖' : '☰';
        });
    }
});
