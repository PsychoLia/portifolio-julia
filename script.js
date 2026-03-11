// ⏔⏔⏔ ꒰ Scroll efect Header ꒱ ⏔⏔⏔
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    updateActiveMenuItem();
});

// ⏔⏔⏔ ꒰ Active menu item based on section ꒱ ⏔⏔⏔
function updateActiveMenuItem() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// ⏔⏔⏔ ꒰ Mobile menu ꒱ ⏔⏔⏔
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

if (menuIcon) {
    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// ⏔⏔⏔ ꒰ Close Mobile menu ꒱ ⏔⏔⏔
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// ⏔⏔⏔ ꒰ Smooth scroll ꒱ ⏔⏔⏔
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ⏔⏔⏔ ꒰ Scroll animation ꒱ ⏔⏔⏔
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        reset: false
    }).reveal('#home, #home img, #aboutme, #aboutme h1, #aboutme p, #aboutme img, #projects, #projects h1, #projects img, #contact, #contact h1, #contact .social-icons', {
        interval: 100
    });
}
