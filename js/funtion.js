function startAnimation() {
    const button = document.getElementById('flowerButton');
    button.style.display = 'none'; // Oculta el botón al hacer clic

    const flowers = document.querySelectorAll('.flower');

    flowers.forEach((flower, index) => {
        flower.style.display = 'block'; // Asegura que las flores se muestren
        flower.style.animationPlayState = 'running'; // Inicia la animación
        flower.style.animationDelay = `${index * 1}s`; // Retrasa la animación de cada flor;
        //flower.style.display = 'none'; // Asegúrate de que estén ocultas inicialmente
        flower.style.animation = 'none'; // Resetea la animación

        // Forzar el reflujo para reiniciar la animación
        flower.offsetHeight;

        // Vuelve a aplicar la animación con un retraso escalonado
        flower.style.display = 'block'; // Muestra las flores de nuevo
        flower.style.animation = `riseUpAndDisappear 6s ease-in-out forwards`; // Aplica la nueva animación
        flower.style.animationDelay = `${index * 0.5}s`; // Escalonamos el retraso (cada flor se retrasa 0.5s más que la anterior)
        flower.style.animationPlayState = 'running'; // Inicia la animación
    });

    // Calcula el tiempo máximo de la animación (ajustado a la cantidad de flores)
    const maxAnimationTime = (12 + (flowers.length * 1)) * 1000; // Duración ajustada

    // Muestra el botón de nuevo cuando termine la animación más larga
    setTimeout(() => {
        button.style.display = 'block'; // Muestra el botón de nuevo
    }, maxAnimationTime);
}

document.addEventListener("DOMContentLoaded", function() {
    const flowers = document.querySelectorAll('.flower');

    // Oculta las flores inicialmente y pausa sus animaciones
    flowers.forEach(flower => {
        flower.style.display = 'none';
        flower.style.animationPlayState = 'paused'; // Pausa la animación hasta que sea activada
    }); 
});
