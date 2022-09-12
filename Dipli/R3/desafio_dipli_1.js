// ---------------------------- functions declaration
function presentation(name) {
    alert("Bienvenido " + name + " al desafio Dipli");
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

function showInstructions() {
    firstRule();
    secondRule();
}

function numberRequest() {
    return Number(
        prompt(
            "Intento N°" +
                cont +
                "\n¿En qué número crees que esta pensando Dipli?"
        )
    );
}

function dipliGame(cont, dipliNum, userNum) {
    let result;
    if (userNum >= min && userNum <= max) {
        result = userNum === dipliNum;
        dif = Math.abs(userNum - dipliNum);
    } else {
        result = -1;
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

function loserMsg() {
    if (cont === 3) {
        alert("Perdiste, mejor suerte para la proxima");
    } else {
        if (result === -1) {
            alert(
                "Se ha ingresado un número fuera del rango " +
                    min +
                    "-" +
                    max +
                    " perdiste un turno"
            );
        } else {
            alert("Fallaste por " + dif + " mejor suerte para la proxima");
        }
    }
}

function winnerMsg() {
    alert("Ganaste!");
}

function newGame() {
    cont = cont + 1;
    userNum = numberRequest();
    result = dipliGame(cont, dipliNum, userNum);
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
if (result === true) {
    winnerMsg();
} else {
    loserMsg();
    newGame();
    if (result === true) {
        winnerMsg();
    } else {
        loserMsg();
        newGame();
        if (result === true) {
            winnerMsg();
        } else {
            loserMsg();
        }
    }
}
