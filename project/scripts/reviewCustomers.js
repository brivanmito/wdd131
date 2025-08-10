document.addEventListener('DOMContentLoaded', function () {
    // Datos de las opiniones (podrías cargarlos desde localStorage o una API)
    const testimonialsData = [
        {
            id: 1,
            name: "María González",
            date: "15 de junio, 2023",
            rating: 5,
            comment: "Compré el último modelo de Samsung y el servicio fue excelente. Me asesoraron perfectamente según mis necesidades y el envío llegó antes de lo esperado. ¡Totalmente recomendado!",
            color: "white"
        },
        {
            id: 2,
            name: "Carlos Mendoza",
            date: "2 de julio, 2023",
            rating: 4,
            comment: "Buen servicio en general. El teléfono que compré funciona perfectamente, aunque el tiempo de entrega fue un poco más largo de lo anunciado. Pero valió la pena la espera por el precio que conseguí.",
            color: "red"
        },
        {
            id: 3,
            name: "Ana Torres",
            date: "22 de agosto, 2023",
            rating: 5,
            comment: "Increíble experiencia de compra. No solo me ayudaron a elegir el mejor equipo para mi presupuesto, sino que además me explicaron todas las funciones. El soporte post-venta también es excelente.",
            color: "green"
        },
        {
            id: 4,
            name: "José Ramírez",
            date: "10 de septiembre, 2023",
            rating: 5,
            comment: "Excelente atención al cliente. Tuve un problema con mi dispositivo y lo resolvieron rápidamente. Definitivamente volveré a comprar aquí.",
            color: "yellow"
        }
    ];

    // Función para convertir puntaje a estrellas
    function getStarRating(rating) {
        const fullStar = '★';
        const emptyStar = '☆';
        return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
    }

    // Función para renderizar las opiniones
    function renderTestimonials() {
        const testimonialsList = document.getElementById('testimonials-list');

        if (!testimonialsList) return;

        testimonialsList.innerHTML = '';

        testimonialsData.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.className = 'testimonial-card';
            testimonialElement.innerHTML = `
                <div class="testimonial-header">
                    <div class="testimonial-avatar"></div>
                    <div>
                        <div class="testimonial-author">${testimonial.name}</div>
                        <div class="testimonial-date">${testimonial.date}</div>
                    </div>
                </div>
                <div class="testimonial-rating">
                    <span class="rating-stars">${getStarRating(testimonial.rating)}</span> ${testimonial.rating}/5
                </div>
                <div class="testimonial-text">"${testimonial.comment}"</div>
            `;

            testimonialsList.appendChild(testimonialElement);
        });
    }

    // Inicializar
    renderTestimonials();

    // Actualizar año actual
    document.getElementById('currentyear').textContent = new Date().getFullYear();
});