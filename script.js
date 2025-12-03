document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("hamburgerBtn");
    const menu   = document.getElementById("mainMenu");

    burger.addEventListener("click", () => {
        menu.classList.toggle("open");
        document.body.classList.toggle("lock-scroll");
    });

    // Close mobile menu on link click
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            document.body.classList.remove("lock-scroll");
        });
    });
});
