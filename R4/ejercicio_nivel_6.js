function tarot(n) {
    let txt;
    switch (n) {
        case 1:
            txt = "Mensaje Amor";
            break;
        case 2:
            txt = "Mensaje Cerveza";
            break;
        case 3:
            txt = "Mensaje Trillizos";
            break;
        case 4:
            txt = "Mensaje Parcial";
            break;
        case 5:
            txt = "Mensaje Casamiento";
            break;
        case 6:
            txt = "Mensaje Hospital";
            break;
        default:
            txt = "Se ingreso un número incorrecto";
            break;
    }
    return txt;
}

let carta;

do {
    carta = Number(prompt("Ingrese un número de carta: "));
    alert(tarot(carta));
} while (carta !== 5);
