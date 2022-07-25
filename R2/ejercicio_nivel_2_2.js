/*  Consigna:

El maestro Yoda viaja mucho por la galaxia,
necesita un programa que le permita saber,
a partir de la hora actual de la Capital de la republica,
que hora es en Endor (+11 hs), Felucia (+5 hs) y Naboo (-1 hs).
Resolverlo utilizando funciones.
*/

function Endor(H) {
    let H_Endor = H + 11;
    if (H_Endor < 24) {
        return H_Endor;
    } else {
        return H_Endor - 24;
    }
}

function Felucia(H) {
    let H_Felucia = H + 5;
    if (H_Felucia < 24) {
        return H_Felucia;
    } else {
        return H_Felucia - 24;
    }
}

function Naboo(H) {
    let H_Naboo = H - 1;
    if (H_Naboo > 0) {
        return H_Naboo;
    } else {
        return H_Naboo + 24;
    }
}

let Today = new Date();

let Hour = Today.getHours();

alert(
    "Hora actual de la Capital de la republica: " +
        Hour +
        "\n\n   Hora en Endor: " +
        Endor(Hour) +
        "\n   Hora en Felucia: " +
        Felucia(Hour) +
        "\n   Hora en Naboo: " +
        Naboo(Hour)
);
