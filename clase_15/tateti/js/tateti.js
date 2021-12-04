

let fichaO = `
<div class="fichaO" data-ocupada="1"></div>
`;
let fichaX = `
<div class="fichaX" data-ocupada="1"><div data-ocupada="1"></div></div>
`;

let valCasillas = [0,0,0,0,0,0,0,0,0];
let enJuego = false;
let turnoJugador = 1;
let ganador = 0;
let numJugada = 0;

let btn_nuevo = document.getElementById('btn_nuevo');
let tablero = document.getElementById('tablero');
let turno = document.getElementById('turno');

btn_nuevo.addEventListener('click', nuevoPartido);

tablero.addEventListener('click', (e)=>{
    let ocupada = e.target.dataset.ocupada;
    let valC = parseInt(e.target.dataset.ncasilla);
    if(ocupada == 0 && enJuego){
        if(turnoJugador == 1){            
            e.target.innerHTML = fichaO;
            e.target.dataset.ocupada = 1;
            valCasillas[valC] = 1;
            turnoJugador = 2;
            turno.innerHTML = 2;
        }else{            
            e.target.innerHTML = fichaX;
            e.target.dataset.ocupada = 1;
            valCasillas[valC] = 4;
            turnoJugador = 1;
            turno.innerHTML = 1;
        }
        numJugada++;
        controlaGanador();
        
    }
});


function controlaGanador(){
    let tateti = [
        valCasillas[0]+valCasillas[1]+valCasillas[2],
        valCasillas[3]+valCasillas[4]+valCasillas[5],
        valCasillas[6]+valCasillas[7]+valCasillas[8],
        valCasillas[0]+valCasillas[3]+valCasillas[6],
        valCasillas[1]+valCasillas[4]+valCasillas[7],
        valCasillas[2]+valCasillas[5]+valCasillas[8],
        valCasillas[0]+valCasillas[4]+valCasillas[8],
        valCasillas[2]+valCasillas[4]+valCasillas[6]
    ];
    // tateti.forEach(function(c,i){
    //     if(c==3){
    //         alert("Gana jugador 1");
    //         ganador = 1;
    //         cierraPartido();
            
    //     }
    //     if(c==12){
    //         alert("Gana jugador 2");
    //         ganador = 2;
    //         cierraPartido();            
    //     }
    // });
    for (var i = 0; i < tateti.length; i++) {
        if(tateti[i]==3){
            alert("Gana jugador 1");
            ganador = 1;
            cierraPartido();
            break;
            
        }
        if(tateti[i]==12){
            alert("Gana jugador 2");
            ganador = 2;
            cierraPartido();  
            break;          
        }
    }
    if(numJugada==9 && ganador == 0){
        
        alert("Empate");
        cierraPartido();
    }

}


function nuevoPartido(){
    cierraPartido();
    enJuego = true;
    turno.innerHTML = 1;
    turnoJugador = 1;
    valCasillas.forEach(function(v,i){
        valCasillas[i]=0;
    })
}

function cierraPartido(){
    enJuego = false;
    ganador = 0;
    numJugada = 0;
    turno.innerHTML = "";
    let casillas = document.querySelectorAll("#tablero>div");
    casillas.forEach((el)=>{
        el.innerHTML = "";
        el.dataset.ocupada = 0;
    });
}