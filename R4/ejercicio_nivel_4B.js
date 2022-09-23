/*
Generá otro módulo que dado un número N de usuarios (N representa un 
número entero cualquiera) se pida un número de carta al usuario y se 
le entregue una profecía a partir de la carta seleccionada.

Ej: Si el primer usuario selecciona la carta #4 entonces le mostramos 
la profecía que propusiste para esa carta, por ej. "Te va a ir excelente 
en el parcial de la diplo DIPLI".
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

function tarotPlayers(n) {
    for (let i = 0; i < n; i++) {
        alert(tarot(Number(prompt("Ingrese un número de carta: "))));
    }
}

tarotPlayers(3);
