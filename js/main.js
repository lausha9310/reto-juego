let usuarioScore = 0;
let compuScore = 0;
const usuarioScore_span = document.getElementById("usuario-score");
const compuScore_span = document.getElementById("compu-score");

const restart = document.getElementById("restart");
const resultado = document.getElementById("resultado");
const modal = document.querySelector(".modal");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijeras_div = document.getElementById("tijeras");

function getCompuOpcione(){
    const opciones = ['piedra', 'papel', 'tijeras'];
    const randomNumber = Math.floor(Math.random() * 3);
    return opciones[randomNumber];
}

function win(usuarioOpcione, compuOpcione){
    usuarioScore++;
    usuarioScore_span.innerHTML = usuarioScore;
    compuScore_span.innerHTML = compuScore;
    resultado.innerHTML = `<i class="icofont-close"></i><h1 class="text-win">Ganastes!</h1> <p>Compu eligio <strong>${compuOpcione}</strong></p>`;
    modal.style.display = 'block';
}

function lose(usuarioOpcione, compuOpcione){
    compuScore++;
    usuarioScore_span.innerHTML = usuarioScore;
    compuScore_span.innerHTML = compuScore;
    resultado.innerHTML = `<i class="icofont-close"></i><h1 class="text-lose">Perdiste</h1> <p>Compu eligio <strong>${compuOpcione}</strong></p>`;
    modal.style.display = 'block';
}

function draw(usuarioOpcione, compuOpcione){
    usuarioScore_span.innerHTML = usuarioScore;
    compuScore_span.innerHTML = compuScore;
    resultado.innerHTML =  `<i class="icofont-close"></i><h1>Es un empate</h1> <p>Ambos eligieron <strong>${compuOpcione}</strong></p>`;
    modal.style.display = 'block';
}

function play(usuarioOpcione){
    const compuOpcione = getCompuOpcione();
    switch (usuarioOpcione + compuOpcione) {
        case 'piedratijeras':
        case 'papelpiedra':
        case 'tijeraspapel':
            win(usuarioOpcione, compuOpcione);
            break;
        case 'piedrapapel':
        case 'papeltijeras':
        case 'tijeraspiedra':
            lose(usuarioOpcione, compuOpcione);
            break;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijerastijeras':
            draw(usuarioOpcione, compuOpcione);
            break;

    }
}

function main(){
    piedra_div.addEventListener('click', function(){
        play('piedra');
    })
    papel_div.addEventListener('click', function(){
        play('papel');
    })
    tijeras_div.addEventListener('click', function(){
        play('tijeras');
    })
}

function clearModal(e){
    if(e.target == modal) {
        modal.style.display = "none"
    }
}

function restartGame(){
    usuarioScore = 0;
    compuScore = 0;
    usuarioScore_span.innerHTML = usuarioScore;
    compuScore_span.innerHTML = compuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();


