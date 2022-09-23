/*
Generá un módulo que a partir de 6 cartas del Tarot, 
entregue una profecía al usuario. Las cartas pueden ser:
"#1- Amor"
"#2- Cerveza"
"#3- Trillizos"
"#4- Parcial"
"#5- Casamiento"
"#6- Hospital"
Por ej. si la carta seleccionada es la número #4, podría 
entregarse una profecía como esta: "Te va a ir excelente en el parcial 
de la diplo DIPLI". Podes proponer tus propias profecías.
*/

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

alert(tarot(Number(prompt("Ingrese un número de carta: "))));
