// Contador de visitas
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el contador actual o inicializarlo
    let visitCount = localStorage.getItem('pageVisitCount');
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    
    // Guardar el nuevo valor
    localStorage.setItem('pageVisitCount', visitCount);
    
    // Mostrar en el footer
    const visitCounter = document.getElementById('visitCounter');
    if(visitCounter) {
        visitCounter.textContent = `You have visited this site ${visitCount} times`;
    }
    
    // Mostrar año actual
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    
    // Mostrar última modificación
    document.getElementById('lastModified').textContent = 
        `Last modification: ${document.lastModified}`;
});