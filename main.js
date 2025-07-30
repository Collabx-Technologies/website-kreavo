// main.js - basic interaction placeholder

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back shortly.');
            form.reset();
        });
    }
});
