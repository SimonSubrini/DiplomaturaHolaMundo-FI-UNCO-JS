function gastos(gasto) {
    gastoTotal += gasto;
    return gastoTotal;
}

let gastoTotal = 0;

alert(gastos(100));
alert(gastos(500));
