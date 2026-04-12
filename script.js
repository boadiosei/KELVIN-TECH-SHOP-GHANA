// ── SMOOTH SCROLL FOR NAV LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// ── HIGHLIGHT ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('h2[id]');
const navLinks = document.querySelectorAll('ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.backgroundColor = '';
        link.style.color = '#f5c518';
        if (link.getAttribute('href') === '#' + current) {
            link.style.backgroundColor = '#f5c518';
            link.style.color = '#1a1a2e';
        }
    });
});


// ── IMAGE CLICK POPUP MESSAGE ──
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function () {
        const name = this.getAttribute('alt') || 'this product';
        alert('Interested in ' + name + '? Call us on 054878475 or email boadiosei111@gmail.com');
    });
});


// ── FOOTER YEAR AUTO-UPDATE ──
const footer = document.querySelector('footer p');
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = '&copy; ' + year + ' Kelvin Tech Shop - Kumasi';
}


// ── WELCOME MESSAGE ON PAGE LOAD ──
window.addEventListener('load', () => {
    console.log('Welcome to Kelvin Tech Shop website!');
});
