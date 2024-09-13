
function startAnimation() {
    const button = document.getElementById('flowerButton');
    button.style.display = 'none'; // Oculta el botón al hacer clic

    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        flower.style.animationPlayState = 'running'; // Inicia las animaciones
    });

    // Calcula el tiempo máximo de la animación más el retraso máximo
    const maxAnimationTime = 10 * 1000 + 6 * 1000; // 10s de animación + 6s del mayor retraso

    // Después de que termine la animación más larga, mostramos el botón
    setTimeout(() => {
        button.style.display = 'block'; // Muestra el botón de nuevo
    }, maxAnimationTime);
}