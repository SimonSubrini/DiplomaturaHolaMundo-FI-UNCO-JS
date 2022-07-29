/*  Consigna:

Anakin ha logrado capturar al conde y se dirije de nuevo a la república para 
que lo puedan juzgar. Después de una larga batalla su flota se vio diezmada, 
el comandante Cody(el usuario) es el encargado de ingresar los datos(parámetros) 
necesarios para que R2D2 pueda calcular y mostrar las siguientes formaciones de 
custodia(Perimetros):

Pentagono (n*lado donde n es la cantidad de lados)
Paralelogramo (2* (base+altura))
Rombo (4 * lado)
Romboide (2 * (Lado1 + Lado2))

Para este nivel tener en cuenta que los datos necesarios son parámetros de entrada. 
La formacion de custodia esta compuesta por el siguiente orden 
Pentagono-Paralelogramo-Rombo-Rombo-Romboide-Rombo-Rombo-Paralelogramo-Pentagono.
*/

function pentagono(n) {
    let P = 5 * n;
    alert(
        "Longitud de los lados del pentagono: " +
            n +
            "cm\n\nPerimetro: P = 5*" +
            n +
            " = " +
            P +
            "cm"
    );
    Pent = P;
}

function paralelogramo(b, a) {
    let P = 2 * (Number(b) + Number(a));
    alert(
        "Longitud de los lados del paralelogramo: " +
            b +
            "cm y " +
            a +
            "cm\n\nPerimetro: P = 2*(" +
            b +
            "+" +
            a +
            ") = " +
            P +
            "cm"
    );
    Para = P;
}

function rombo(l) {
    let P = 4 * l;
    alert(
        "Longitud de los lados del rombo: " +
            l +
            "cm\n\nPerimetro: P = 4*" +
            l +
            " = " +
            P +
            "cm"
    );
    Romb = P;
}

function romboide(l1, l2) {
    let P = 2 * (Number(l1) + Number(l2));
    alert(
        "Longitud de los lados del romboide: " +
            l1 +
            "cm y " +
            l2 +
            "cm\n\nPerimetro: P = 2*(" +
            l1 +
            "+" +
            l2 +
            ") = " +
            P +
            "cm"
    );
    Romboi = P;
}

function formacion(a_pen, a_par, b_par, a_rombo, a_romboide, b_romboide) {
    pentagono(a_pen);
    paralelogramo(a_par, b_par);
    rombo(a_rombo);
    romboide(a_romboide, b_romboide);
    alert(
        "Formación de custodia: \n" +
            Pent +
            " - " +
            Para +
            " - " +
            Romb +
            " - " +
            Romb +
            " - " +
            Romboi +
            " - " +
            Romb +
            " - " +
            Para +
            " - " +
            Pent
    );
}

let Pent = 0;
let Para = 0;
let Romb = 0;
let Romboi = 0;

let a_pen = prompt("Ingrese la longitud de los lados del pentagono: ");
let a_par = prompt("Ingrese la longitud de uno los lados del paralelogramo : ");
let b_par = prompt(
    "Ingrese la longitud del otro de los lados del paralelogramo: "
);
let a_rombo = prompt("Ingrese la longitud de los lados del rombo: ");
let a_romboide = prompt("Ingrese la longitud de uno los lados del romboide : ");
let b_romboide = prompt(
    "Ingrese la longitud del otro de los lados del romboide: "
);

formacion(a_pen, a_par, b_par, a_rombo, a_romboide, b_romboide);
