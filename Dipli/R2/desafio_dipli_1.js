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

function thirdRule() {
    alert(
        "El número en el que penso Dipli es un número entero entre " +
            min +
            " y " +
            max
    );
}

function showInstructions() {
    firstRule();
    secondRule();
    thirdRule();
}

function dipliGame(cont, dipliNum) {
    let flagWin = -1;
    let estado = "";
    let userNum = prompt(
        "Intento N°" + cont + "\n¿En qué número crees que esta pensando Dipli?"
    );
    estado = userNum > dipliNum ? "MAYOR" : "MENOR";
    if (dipliNum != userNum) {
        alert(
            "Mejor suerte para la proxima\nEl número que elegiste es " +
                estado +
                " al que eligio dipli"
        );
    } else {
        alert("Felicitaciones! Venciste a dipli en " + cont + " intentos");
        flagWin = 1;
    }
    return flagWin;
}

function loserMessage() {
    alert("Gano Dipli, segui participando...");
}

function winerMessage(cont) {
    alert("Felicitaciones, venciste a Dipli en " + cont + " intentos");
}

// ---------------------------- variable initialization
const min = 0;
const max = 100;
let dipliNum = Math.floor(Math.random() * (max - min + 1) + min);
let cont = 1;
let name = prompt("Ingrese su nombre: ");

// ---------------------------- main code
presentation(name);
showInstructions();

if (dipliGame(cont, dipliNum) == -1) {
    cont++;
    if (dipliGame(cont, dipliNum) == -1) {
        cont++;
        if (dipliGame(cont, dipliNum) == -1) {
            loserMessage();
        } else {
            winerMessage(cont);
        }
    } else {
        winerMessage(cont);
    }
} else {
    winerMessage(cont);
}
