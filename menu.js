const menuToggle = document.getElementById('menu');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        navbar.style.display = 'block'; // Muestra el menú
        setTimeout(() => {
            navbar.style.opacity = '1'; // Hace que el menú sea visible
        }, 10); // Pequeña pausa para que se aplique el display
    } else {
        navbar.style.opacity = '0'; // Oculta el menú
        setTimeout(() => {
            navbar.style.display = 'none'; // Lo oculta después de la animación
        }, 300); // Espera a que la transición de opacidad termine
    }
});

