function IMC(peso, altura) {
    return peso / altura ** 2;
}

let peso = prompt("Ingrese su peso: ");
let altura = prompt("Ingrese su altura: ");

alert("Su IMC es de: " + IMC(peso, altura));
