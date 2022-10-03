// ---------------------------- functions declaration
function presentation(name) {
    alert("Bienvenido " + name + " al desafio Dipli");
}

function showInstructions() {
    firstRule();
    secondRule();
}

function firstRule() {
    alert(
        "El desafio consiste en que adivines el número en el que esta pensando Dipli"
    );
}

function secondRule() {
    alert(
        "Otras reglas:\n* El contrincante no debe arriesgar más de un valor en cada intento.\n* Un jugador siempre deberá ver la respuesta de Dipli, antes de realizar un nuevo intento.\n* Dipli no puede cambiar de número durante una partida.\n* Dipli no puede imaginar números fuera del rango del juego.\n* Si la partida se prolonga por encima de una cantidad de intentos(3) Dipli será quien gana."
    );
}

function numberRequest() {
    return Number(
        prompt(
            "Intento N°" +
                (cont + 1) +
                "\n¿En qué número crees que esta pensando Dipli? \nRecorda que Dipli esta pensando en un número entre " +
                min +
                " y " +
                max +
                "\nVidas disponibles:  " +
                (10 - cont) +
                " vidas (nivel de radioactividad: " +
                150 * cont +
                "REM)"
        )
    );
}

function dipliGame(dipliNum, userNum) {
    let result;
    result = userNum === dipliNum;
    if (userNum >= min && userNum <= max) {
        dif = dipliNum - userNum;
    } else {
        alert(
            "Se ha ingresado un número fuera del rango " +
                min +
                "-" +
                max +
                " perdiste un turno"
        );
    }
    return result;
}

function gameKind() {
    let dipliNum;
    let type = Number(
        prompt(
            "Ingrese el tipo de juego que desea jugar:\n1: Clásico --> 0-100\n2: Pares polacos --> 0-200 (solo números pares)\n3: Andina Patagónica --> -20-40"
        )
    );
    switch (type) {
        case 1:
            min = 0;
            max = 100;
            dipliNum = Math.floor(Math.random() * (max - min + 1) + min);
            break;
        case 2:
            min = 0;
            max = 200;
            dipliNum =
                2 * Math.floor(Math.random() * (max / 2 - min + 1) + min);
            break;
        case 3:
            min = -20;
            max = 40;
            dipliNum = Math.floor(Math.random() * (max - min + 1) + min);
            break;
        default:
            alert(
                "Se ha ingresado un tipo de juego incorrecto, el juego se ejecutara en modo clásico 0-100"
            );
            min = 0;
            max = 100;
            dipliNum = Math.floor(Math.random() * (max - min + 1) + min);
            break;
    }
    return dipliNum;
}

function newGame() {
    for (cont = 0; cont < 10; cont++) {
        userNum = numberRequest();
        result = dipliGame(dipliNum, userNum);
        if (result) {
            winnerMsg();
            break;
        }
        loserMsg();
    }
}

function loserMsg() {
    if (cont === 9) {
        alert(
            "Perdiste, mejor suerte para la proxima la radioactividad llego al limite permitido"
        );
    } else {
        let txt = dif > 0 ? "MAYOR" : "MENOR";
        alert(
            "El número en el que penso dipli es un número  " +
                txt +
                " al tuyo, mejor suerte para la proxima"
        );
    }
}

function winnerMsg() {
    alert("Ganaste!");
}

// ---------------------------- variable initialization
let min;
let max;
let cont = 0;
let name = prompt("Ingrese su nombre: ");
let dif;
let result;
let userNum;
let dipliNum;

// ---------------------------- main code
presentation(name);
showInstructions();
dipliNum = gameKind();

newGame();
