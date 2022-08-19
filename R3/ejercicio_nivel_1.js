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

function Cuadrado() {
    let a = Number(prompt("Ingrese la longitud de los lados del cuadrado: "));
    if (calc === "A") {
        let A = A_Cuadrado(a);
        alert("área del cuadrado: A = " + A);
    }
    if (calc === "P") {
        let P = P_Cuadrado(a);
        alert("Perimetro del cuadrado: P = " + P);
    }
    if (calc !== "A" && calc !== "P") {
        alert("Error: Ingrese un tipo de cálculo correcto");
    }
}

function Rectangulo() {
    let a = Number(
        prompt("Ingrese la longitud de uno de los lados del rectangulo: ")
    );
    let b = Number(
        prompt("Ingrese la longitud del otro de los lados del rectangulo: ")
    );
    if (calc === "A") {
        let A = A_Rectangulo(a, b);
        alert("área del rectangulo: A = " + A);
    }
    if (calc === "P") {
        let P = P_Rectangulo(a, b);
        alert("Perimetro del rectangulo: P = " + P);
    }
    if (calc !== "A" && calc !== "P") {
        alert("Error: Ingrese un tipo de cálculo correcto");
    }
}

function Triangulo() {
    let a = Number(prompt("Ingrese la longitud de la base del triangulo: "));
    let b = Number(prompt("Ingrese la longitud de la altura del triangulo: "));
    if (calc === "A") {
        let A = A_Triangulo(a, b);
        alert("área del triangulo: A = " + A);
    }
    if (calc === "P") {
        let P = P_Triangulo(a, b);
        alert("Perimetro del triangulo: P = " + P);
    }
    if (calc !== "A" && calc !== "P") {
        alert("Error: Ingrese un tipo de cálculo correcto");
    }
}

function Circunferencia() {
    let r = Number(
        prompt("Ingrese la longitud del radio de la circunferencia: ")
    );
    if (calc === "A") {
        let A = A_Circulo(r);
        alert("área de la circunferencia: A = " + A);
    }
    if (calc === "P") {
        let P = P_Circulo(r);
        alert("Perimetro de la circunferencia: P = " + P);
    }
    if (calc !== "A" && calc !== "P") {
        alert("Error: Ingrese un tipo de cálculo correcto");
    }
}

let figure = prompt(
    "Ingrese el tipo de figura:\nC: Cuadrado\nR: Rectángulo\nT: Triangulo\nO: Circunferencia"
);

let calc = prompt(
    "Ingrese el tipo de cálculo a realizar:\nA: Área\nP: Perimetro"
);

if (figure === "C") {
    Cuadrado();
}
if (figure === "R") {
    Rectangulo();
}
if (figure === "T") {
    Triangulo();
}
if (figure === "O") {
    Circunferencia();
}
