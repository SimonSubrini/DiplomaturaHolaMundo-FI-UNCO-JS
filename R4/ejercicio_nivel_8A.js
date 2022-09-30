function actualizarEnergia(energiaActual, codigoComando) {
    let energiaConsumida = 0;
    switch (codigoComando) {
        case 1:
            energiaConsumida = 5;
            break;
        case 2:
            energiaConsumida = 7;
            break;
        case 3:
            energiaConsumida = 4;
            break;
        case 4:
            energiaConsumida = 6;
            break;
        case 5:
            energiaConsumida = 30;
            break;
        default:
            break;
    }
    return energiaActual - energiaConsumida;
}

let energiaActual = 30;
let codigoComando = Number(prompt("Ingresa un comando: "));

let auxEnergia = actualizarEnergia(energiaActual, codigoComando);
if (energiaActual === auxEnergia) {
    alert("Se ha ingresado un comando incorrecto");
} else if (auxEnergia < 0) {
    alert("Dipli no tiene la energía suficiente para realizar ese comando");
} else {
    energiaActual = auxEnergia;
    alert(
        "Comando ingresado correctamente, energia actual de dipli: " +
            energiaActual
    );
}
