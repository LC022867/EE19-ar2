//Navigation för mobil
const navSidor = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.6}s`;
            }
        });
    });
}
navSidor();
//Navigation för mobil slut


