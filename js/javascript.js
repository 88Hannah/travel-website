const navbarColapse = document.getElementById('nav-list');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(link => {
    
    if (!link.classList.contains('dropdown')) {
        link.addEventListener('click', () => {
            closeNav();
        });
    };

});

document.addEventListener('click', event => {
    
    if (!event.target.closest('nav')) {
        closeNav();
    } else if (event.target.classList.contains('dropdown-item')) {
        closeNav();
    }

});

const closeNav = () => {

    if(navbarColapse.classList.contains('show')) {
        navbarColapse.classList.remove('show');
    };

}