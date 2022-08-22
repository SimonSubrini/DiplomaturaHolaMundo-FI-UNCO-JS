function adult(years) {
    let flagAdult = false;
    if (years >= 18) {
        flagAdult = true;
    }
    return flagAdult;
}

function even(num) {
    let result = false;
    if (num % 2 === 0) {
        result = true;
    }
    return result;
}

function evenDays(num) {
    let result = false;
    if (num === 1 || num === 3 || num === 5) {
        result = true;
    }
    return result;
}

function oddDays(num) {
    let result = false;
    if (num === 2 || num === 4 || num === 6) {
        result = true;
    }
    return result;
}

let years = Number(prompt("Ingrese su edad: "));
let lastDNI = Number(prompt("Ingrese el ultimo número de su DNI: "));
let dayOfWeek = Number(
    prompt(
        "Ingrese el día de la semana según:\n   1: Lunes\n   2: Martes\n   3: Miércoles\n   4: Jueves\n   5: Viernes\n   6: Sabado\n   7: Domingo"
    )
);

if (dayOfWeek === 7) {
    alert("Dia domingo, cualquier persona puede salir.");
} else if (adult(years)) {
    if (even(lastDNI) && evenDays(dayOfWeek)) {
        alert(
            "Adulto con documento par, en día lunes, miercoles o viernes, puede salir."
        );
    } else if (!even(lastDNI) && oddDays(dayOfWeek)) {
        alert(
            "Adulto con documento impar, en día martes, jueves o sabado, puede salir."
        );
    } else {
        alert(
            "Adulto con documento incompatible con el día de la semana, no puede salir."
        );
    }
} else {
    alert("Menor de edad en día de semana, no puede salir.");
}
