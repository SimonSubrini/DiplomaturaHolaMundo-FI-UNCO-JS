/*  Consigna:

Anakin ha logrado capturar al conde y se dirije de nuevo a
la república para que lo puedan juzgar. Después de una larga 
batalla su flota se vio diezmada, el comandante Cody(el usuario) 
es el encargado de ingresar los datos(parámetros) necesarios para que 
R2D2 pueda calcular y mostrar las siguientes formaciones de custodia:

Cuadrado
Rectangulo
Triangulo
Circunferencia

Para este nivel tener en cuenta que los datos necesarios 
son parámetros de entrada
*/

function Cuadrado(a) {
    let A = a ** 2;
    let P = 4 * a;
    alert(
        "Longitud de los lados del cuadrado: " +
            a +
            "cm\nArea: A = " +
            a +
            "^2 = " +
            A +
            "cm^2\nPerimetro: P = 4*" +
            a +
            " = " +
            P +
            "cm"
    );
}
function Rectangulo(a, b) {
    let A = a * b;
    let P = 2 * a + 2 * b;
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
            A +
            "cm^2\nPerimetro: P = 2*" +
            a +
            "+2*" +
            b +
            " = " +
            P +
            "cm"
    );
}
function Triangulo(a, b) {
    let A = (a * b) / 2;
    let P =
        parseFloat(a) + parseFloat(b) + parseFloat(Math.sqrt(a ** 2 + b ** 2));
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
            A +
            "cm^2\nPerimetro: P = " +
            a +
            "+" +
            b +
            "+sqrt(" +
            a +
            "^2+" +
            b +
            "^2) = " +
            P +
            "cm"
    );
}
function Circulo(r) {
    let A = Math.PI * r ** 2;
    let P = 2 * Math.PI * r;
    alert(
        "Radio del circulo: " +
            r +
            "cm\nArea: A = pi*" +
            r +
            "^2 = " +
            A +
            "cm^2\nPerimetro: P = 2*pi*" +
            r +
            " = " +
            P +
            "cm"
    );
}

let a_Cu = prompt("Ingrese la longitud de los lados del cuadrado: ");
let a_R = prompt("Ingrese la longitud de uno los lados del rectangulo: ");
let b_R = prompt("Ingrese la longitud del otro de los lados del rectangulo: ");
let a_T = prompt("Ingrese la longitud de uno los lados del triangulo: ");
let b_T = prompt("Ingrese la longitud del otro de los lados del triangulo: ");
let r_Ci = prompt("Ingrese el radio del circulo: ");

Cuadrado(a_Cu);
Rectangulo(a_R, b_R);
Triangulo(a_T, b_T);
Circulo(r_Ci);
