const navbar = document.getElementsByTagName('nav');
const navbarColapse = document.getElementById('nav-list');

const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');
const dropDownLink = document.getElementById('navbarDropdown');
const aboutLink = document.querySelector('a[href="#about-anchor"]');

const about = document.getElementById('about-anchor');
const countries = document.getElementById('countries-anchor');

document.addEventListener('scroll', () => {

    const countriesPosition = countries.getBoundingClientRect().top;
    const aboutPosition = about.getBoundingClientRect().top;

    if (!dropDownLink.classList.contains('active')) {
        if (countriesPosition <= 0) {
            aboutLink.classList.remove('active');
            dropDownLink.classList.add('active');
        }

        if (aboutPosition <= 0) {
            aboutLink.classList.add('active');
        }
    }

    if (dropDownLink.classList.contains('active')) {
        if (countriesPosition > 0) {
            dropDownLink.classList.remove('active');
        } else {
            aboutLink.classList.remove('active');
        }
    }

}, {passive: true});



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