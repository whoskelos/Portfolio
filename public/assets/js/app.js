window.onload = function () {
    var elevator = new Elevator({
        element: document.querySelector(".elevator-button"),
        mainAudio: "/public/assets/files/start.mp3",
        endAudio: "/public/assets/files/end.mp3",
        duration: 4000,
    });
};

// Función para verificar la posición de desplazamiento y mostrar/ocultar el botón
function checkScrollPosition() {
    const scrollButton = document.getElementById("scrollButton");
    const content = document.getElementById("content");

    // Calcula la posición actual del desplazamiento vertical
    const scrollY = window.scrollY || window.pageYOffset;
    const contentHeight = content.clientHeight;
    const windowHeight = window.innerHeight;

    // Muestra u oculta el botón basado en la posición del desplazamiento
    if (scrollY > contentHeight - windowHeight) {
        scrollButton.classList.remove("hidden");
    } else {
        scrollButton.classList.add("hidden");
    }
}

// Agrega un event listener para verificar la posición de desplazamiento al desplazar la página
window.addEventListener("scroll", checkScrollPosition);

// También verifica la posición de desplazamiento cuando la página se carga inicialmente
window.addEventListener("load", checkScrollPosition);
