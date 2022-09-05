//funcion que nos brinda información de un año
function infoAnio(anio, dias) {
    let par = anio % 2 === 0;
    let info;
    if (dias !== 365) {
        info = "El año " + anio + " es biciesto.";
    } else {
        info = "El año " + anio + " no es biciesto.";
        if (par) {
            info += " Y es par.";
        } else {
            info += " Y es impar";
        }
    }
    return info;
}

let anio = Number(prompt("Ingresá un año:"));
let diasAnio = Number(
    prompt("Ingresá la cantidad de días que tiene el año " + anio + ":")
);
let datosAnio = infoAnio(anio, diasAnio);
alert(datosAnio);
