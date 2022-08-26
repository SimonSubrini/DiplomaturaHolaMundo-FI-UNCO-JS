function evaluateNote1(note) {
    let txt;
    if (note > 5) {
        txt = "Examen aprobado";
    } else {
        txt = "Examen desaprobado";
    }
    return txt;
}

function evaluateNote2(note) {
    return note > 5 ? "Examen aprobado" : "Examen desaprobado";
}

let note = prompt("Ingrese su nota: ");

alert(evaluateNote1(note));

alert(evaluateNote2(note));
