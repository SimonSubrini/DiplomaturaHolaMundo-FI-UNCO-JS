/*  Consigna ej 5: Refactorizando el ej 3
En esta oportunidad las funciones nos retornaran un valor el cual se mostrara 
por pantalla fuera de la función
Consigna ej 3:

R2D2 le solicita a Anakin que ingrese las dimensiones de la flota 
que está persiguiendo al conde para poder calcular el tamaño del 
vórtice del hiperespacio. Con esta informacion va a realizar varias 
funciones para poder obtener y mostrar el área y el perímetro de las siguientes 
formaciones de:

Cuadrado
Rectangulo
Triangulo
Circunferencia

Para este nivel tener en cuenta los siguientes datos, 
los lados del cuadrado miden 2 cm, los lados del rectangulo miden 2 y 4 cm 
respectivamente, los lados del triangulo miden 5 cm y el diametro de la 
circunferencia mide 4 cm
*/

function A_Cuadrado(a) {
    let A = a ** 2;
    return A;
}

function P_Cuadrado(a) {
    let P = 4 * a;
    return P;
}

function A_Rectangulo(a, b) {
    let A = a * b;
    return A;
}

function P_Rectangulo(a, b) {
    let P = 2 * (a + b);
    return P;
}

function A_Triangulo(a, b) {
    let A = (a * b) / 2;
    return A;
}

function P_Triangulo(a, b) {
    let P = a + b + Math.sqrt(a ** 2 + b ** 2);
    return P;
}

function A_Circulo(r) {
    let A = Math.PI * r ** 2;
    return A;
}

function P_Circulo(r) {
    let P = 2 * Math.PI * r;
    return P;
}

alert(
    "Cuadrado:\n    Area: " +
        A_Cuadrado(2) +
        "cm2\n    Perimetro: " +
        P_Cuadrado(2) +
        "cm"
);
alert(
    "Rectangulo:\n    Area: " +
        A_Rectangulo(2, 4) +
        "cm2\n    Perimetro: " +
        P_Rectangulo(2, 4) +
        "cm"
);
alert(
    "Triangulo:\n    Area: " +
        A_Triangulo(5, 5) +
        "cm2\n    Perimetro: " +
        P_Triangulo(5, 5) +
        "cm"
);
alert(
    "Circulo:\n    Area: " +
        A_Circulo(4) +
        "cm2\n    Perimetro: " +
        P_Circulo(4) +
        "cm"
);
