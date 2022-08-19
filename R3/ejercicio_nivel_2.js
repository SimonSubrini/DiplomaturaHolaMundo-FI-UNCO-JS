function conv24to12(hour24) {
    let hour12;
    if (hour24 === 0) {
        hour12 = 12;
    }
    if (hour24 > 0 && hour24 < 13) {
        hour12 = hour24;
    }
    if (hour24 > 12 && hour24 < 24) {
        hour12 = hour24 - 12;
    }
    if (hour24 > 23) {
        hour12 = -1;
    }
    return hour12;
}

function AMPM(hour24) {
    let AMorPM = "";
    if (hour24 < 12) {
        AMorPM = " AM";
    } else {
        AMorPM = " PM";
    }
    return AMorPM;
}

let hour24 = Number(prompt("Ingrese una hora en formato 24hs: "));

let h12 = conv24to12(hour24);
let hAMorPM = AMPM(hour24);

if (h12 == -1) {
    alert("Ingrese una hora valida");
} else {
    alert(hour24 + " => " + h12 + hAMorPM);
}
