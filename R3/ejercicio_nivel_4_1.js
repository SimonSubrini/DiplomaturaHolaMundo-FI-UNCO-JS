//funcion que nos brinda información de un año
function datosAnio(anio, dias) {
    let biciesto = false;
    if (dias !== 365) {
        biciesto = true;
    }
    return biciesto;
}

function everOrOdd(anio, dias) {
    let eOO = -1;
    if (!datosAnio(anio, dias)) {
        if (anio % 2 == 0) {
            eOO = 2;
        } else {
            eOO = 1;
        }
    }
    return eOO;
}

let anio = Number(prompt("Ingresá un año:"));
let dias = Number(
    prompt("Ingresá la cantidad de días que tiene el año " + anio + ":")
);
let biciesto = datosAnio(anio, dias);
if (biciesto) {
    alert("El año " + anio + " es biciesto.");
} else {
    alert("El año " + anio + " no es biciesto.");
}
let eOO = everOrOdd(anio, dias);
if (eOO == -1) {
    alert("El año es biciesto.");
} else if (eOO == 1) {
    alert("El año no es biciesto y es impar.");
} else {
    alert("El año no es biciesto y es par.");
}
