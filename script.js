document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mainMenu');
    const body = document.body;

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
        body.classList.toggle('scroll-lock'); 
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) { 
                menu.classList.remove('open');
                body.classList.remove('scroll-lock');
            }
        });
    });
});