function condition(note1, note2, note3) {
    let prom = Math.round((note1 + note2 + note3) / 0.03) / 100;
    let txt = "Nota promedio: " + prom + "\n   ";
    if (prom >= 8) {
        txt += "Materia promocionada";
    } else {
        txt += "Materia NO promocionada";
    }
    return txt;
}

let note1 = Number(prompt("Ingrese su nota n° 1"));
let note2 = Number(prompt("Ingrese su nota n° 2"));
let note3 = Number(prompt("Ingrese su nota n° 3"));

alert(condition(note1, note2, note3));
