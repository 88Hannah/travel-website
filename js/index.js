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