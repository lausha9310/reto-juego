function startAnimation() {
    const button = document.getElementById('flowerButton');
    button.style.display = 'none'; // Oculta el botón al hacer clic

    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach((flower, index) => {
        // Restablece el estado inicial de cada flor antes de iniciar la animación
        flower.style.display = 'none'; // Asegúrate de que estén ocultas inicialmente
        flower.style.animation = 'none'; // Resetea la animación
        
        // Forzar el reflujo para reiniciar la animación
        flower.offsetHeight;
        
        // Vuelve a aplicar la animación con un retraso escalonado
        flower.style.display = 'block'; // Muestra las flores de nuevo
        flower.style.animation = `riseUpAndDisappear 6s ease-in-out forwards`; // Aplica la nueva animación
        flower.style.animationDelay = `${index * 0.5}s`; // Escalonamos el retraso (cada flor se retrasa 0.5s más que la anterior)
        flower.style.animationPlayState = 'running'; // Inicia la animación
    });

    // Calcula el tiempo máximo de la animación más el retraso
    const maxAnimationTime = 6 * 1000 + (flowers.length - 1) * 500; // 6s de animación + retraso entre flores

    // Después de que termine la animación más larga, mostramos el botón de nuevo
    setTimeout(() => {
        button.style.display = 'block'; // Muestra el botón de nuevo
    }, maxAnimationTime);
}

document.addEventListener("DOMContentLoaded", function() {
    const flowers = document.querySelectorAll('.flower');

    // Asegúrate de que las flores estén ocultas inicialmente
    flowers.forEach(flower => {
        flower.style.display = 'none';
        flower.style.animationPlayState = 'paused'; // Pausa la animación hasta que se haga clic
    });
});
