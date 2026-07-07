// Typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
const text = heroTitle.textContent;
heroTitle.textContent = '';
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Scroll animation for sections
const sections = document.querySelectorAll('.section, .hero-content, .project-card');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function checkSections() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);

// Contact form submission handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation can be added here if needed

    // Simulate form submission success
    formMessage.textContent = 'Pesan Anda telah terkirim. Terima kasih!';
    formMessage.style.color = 'var(--accent-color)';
    contactForm.reset();
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


