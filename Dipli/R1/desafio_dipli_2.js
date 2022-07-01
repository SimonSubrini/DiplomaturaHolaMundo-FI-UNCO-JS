const min = 0;
const max = 100;
const maxCont = 10;
let estado = "";

let dipliNum = Math.floor(Math.random() * (max - min + 1) + min);
let cont = 0;
let userNum = min - 1;

let Name = prompt("Ingrese su nombre: ");
alert("Bienvenido " + Name + " al desafio Dipli");
alert(
    "El desafio consiste en que adivines el número en el que esta pensando Dipli"
);
alert(
    "El número en el que penso Dipli es un número entero entre " +
        min +
        " y " +
        max
);

while (dipliNum != userNum) {
    cont++;
    userNum = prompt(
        "Intento N°" + cont + "\n¿En qué número crees que esta pensando Dipli?"
    );
    while (userNum < min || userNum > max || userNum != Math.floor(userNum)) {
        alert(
            "Error, debes ingresar un número entero entre " + min + " y " + max
        );
        userNum = prompt(
            "Intento N°" +
                cont +
                "\n¿En qué número crees que esta pensando Dipli?"
        );
    }
    estado = userNum > dipliNum ? "MAYOR" : "MENOR";
    if (dipliNum != userNum) {
        alert(
            "Mejor suerte para la proxima\nEl número que elegiste es " +
                estado +
                " al que eligio dipli"
        );
    } else {
        alert("Felicitaciones! Venciste a dipli en " + cont + " intentos");
    }
    if (cont >= maxCont) {
        alert("Felicitaciones!.... A Dipli, porque te vencio");
    }
}
