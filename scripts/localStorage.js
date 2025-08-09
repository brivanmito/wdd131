document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount");

    if (!count) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }

    count++; // Sumamos 1 porque el usuario acaba de enviar un review
    localStorage.setItem("reviewCount", count);

    document.getElementById("reviewCount").textContent = count;
});