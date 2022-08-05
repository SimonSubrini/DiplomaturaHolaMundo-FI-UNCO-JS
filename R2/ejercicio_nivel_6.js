function a_Rectangulo(a, b) {
    let area = a * b;
    return area;
}

function a_Triangulo(a, b) {
    let area = (a * b) / 2;
    return area;
}

function a_Circulo(r) {
    let area = Math.PI * r ** 2;
    return area;
}

let bColumn1 = Number(prompt("Ingrese la base de la columna izquierda: "));
let hColumn1 = Number(prompt("Ingrese la altura de la columna izquierda: "));
let bColumn2 = Number(prompt("Ingrese la base de la columna derecha: "));
let hColumn2 = Number(prompt("Ingrese la altura de la columna derecha: "));
let bHall = Number(prompt("Ingrese la base del salón: "));
let hHall = Number(prompt("Ingrese la altura del salón: "));
let bRoof = Number(prompt("Ingrese la base del techo: "));
let hRoof = Number(prompt("Ingrese la altura del techo: "));
let bDoor = Number(prompt("Ingrese la base de la puerta: "));
let hDoor = Number(prompt("Ingrese la altura de la puerta: "));
let rWind1 = Number(prompt("Ingrese el radio de la ventana izquierda: "));
let rWind2 = Number(prompt("Ingrese el radio de la ventana central: "));
let rWind3 = Number(prompt("Ingrese el radio de la ventana derecha: "));

let areaTotal =
    Math.round(
        (a_Rectangulo(bColumn1, hColumn1) +
            a_Rectangulo(bColumn2, hColumn2) +
            a_Rectangulo(bHall, hHall) +
            a_Triangulo(bRoof, hRoof) -
            a_Rectangulo(bDoor, hDoor) -
            a_Circulo(rWind1) -
            a_Circulo(rWind2) -
            a_Circulo(rWind3)) *
            100
    ) / 100;

alert("Área total: " + areaTotal);
