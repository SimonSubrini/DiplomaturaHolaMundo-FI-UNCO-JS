// funcion que nos da un mensaje informando sobre una letra
function analizarLetra(letra) {
    let letNorm = letra.toUpperCase();
    let letraA = letNorm === "A";
    let letraE = letNorm === "E";
    let letraI = letNorm === "I";
    let letraO = letNorm === "O";
    let letraU = letNorm === "U";
    let letraVocal = letraA || letraE || letraI || letraO || letraU;
    if (letraVocal) {
        let esMayuscula = letNorm === letra;
        if (esMayuscula) {
            //verificamos si la vocal es mayúscula
            alert("La letra " + letra + " es una vocal mayúscula");
        } else {
            alert("La letra " + letra + " es una vocal minúscula");
        }
    } else {
        alert("La letra " + letra + " es una consonante");
    }
}

// ----------- acá comienza nuestro código principal ----------------------------

// ingresamos una letra
let letra = prompt(
    "ingresa una letra para enviar por parámetro a la función analizarLetra:"
);
analizarLetra(letra);
