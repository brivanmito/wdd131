document.addEventListener('DOMContentLoaded', function () {
    // Mostrar mensaje solo en thanks.html
    if (window.location.pathname.includes('thanks.html')) {
        updateFormSubmissionCount();
    }

    // Configurar contador de envíos solo si existe el formulario
    const form = document.querySelector('.wf1');
    if (form) {
        form.addEventListener('submit', function () {
            incrementFormSubmissionCount();
            // No preventDefault: permite que el formulario se envíe y cargue thanks.html
        });
    }
});

function incrementFormSubmissionCount() {
    let count = localStorage.getItem('formSubmissionCount');
    count = count ? parseInt(count, 10) + 1 : 1;
    localStorage.setItem('formSubmissionCount', count);
}

function updateFormSubmissionCount() {
    let count = localStorage.getItem('formSubmissionCount');
    count = count ? parseInt(count, 10) : 0;

    const message = document.createElement('p');

    if (count === 1) {
        message.textContent = `We have received your information and will get back to you shortly. If you have any questions, feel free to contact us.`;
    } else if (count > 1) {
        message.textContent = `We have already received your form ${count} times. We will get in touch with you soon.`;
    } else {
        message.textContent = `Thank you for visiting. You haven't submitted the form yet.`;
    }

    const main = document.querySelector('main');
    if (main) {
        main.appendChild(message);
    }
}
