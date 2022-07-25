/*  Consigna:

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

function Cuadrado(a) {
    alert(
        "Longitud de los lados del cuadrado: " +
            a +
            "cm\nArea: A = " +
            a +
            "^2 = " +
            a ** 2 +
            "cm^2\nPerimetro: P = 4*" +
            a +
            " = " +
            4 * a +
            "cm"
    );
}
function Rectangulo(a, b) {
    alert(
        "Longitud de los lados del rectangulo: " +
            a +
            "cm, " +
            b +
            "cm\nArea: A = " +
            a +
            "*" +
            b +
            " = " +
            a * b +
            "cm^2\nPerimetro: P = 2*" +
            a +
            "+2*" +
            b +
            " = " +
            (2 * a + 2 * b) +
            "cm"
    );
}
function Triangulo(a, b) {
    alert(
        "Longitud de los catetos del triangulo: " +
            a +
            "cm, " +
            b +
            "cm\nArea: A = " +
            a +
            "*" +
            b +
            "/2 = " +
            (a * b) / 2 +
            "cm^2\nPerimetro: P = " +
            a +
            "+" +
            b +
            "+sqrt(" +
            a +
            "^2+" +
            b +
            "^2) = " +
            (a + b + Math.sqrt(a ** 2 + b ** 2)) +
            "cm"
    );
}
function Circulo(r) {
    alert(
        "Radio del circulo: " +
            r +
            "cm\nArea: A = pi*" +
            r +
            "^2 = " +
            Math.PI * r ** 2 +
            "cm^2\nPerimetro: P = 2*pi*" +
            r +
            " = " +
            2 * Math.PI * r +
            "cm"
    );
}

Cuadrado(2);
Rectangulo(2, 4);
Triangulo(5, 5);
Circulo(4);
