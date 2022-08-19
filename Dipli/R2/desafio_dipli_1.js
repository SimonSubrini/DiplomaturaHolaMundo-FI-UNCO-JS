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
        "Otras reglas:\n
        * El contrincante no debe arriesgar más de un valor en cada intento.\n
        * Un jugador siempre deberá ver la respuesta de Dipli, antes de realizar un nuevo intento.\n
        * Dipli no puede cambiar de número durante una partida.\n
        * Dipli no puede imaginar números fuera del rango del juego.\n
        * Si la partida se prolonga por encima de una cantidad de intentos(3) Dipli será quien gana."
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
    let result;
    let dif;
    let userNum = prompt(
        "Intento N°" + cont + "\n¿En qué número crees que esta pensando Dipli?"
    );

    result = userNum == dipliNum;
    dif = Math.abs(userNum - dipliNum);
    alert(
        "Gano Dipli: " +
            !result +
            "\nGano contrincante: " +
            result +
            "\nFallaste por " +
            dif
    );
    cont=cont+1;
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

dipliGame(cont, dipliNum);
dipliGame(cont, dipliNum);
dipliGame(cont, dipliNum);
