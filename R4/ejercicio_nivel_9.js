function liquidaItem(item, cantidad) {
    let result = 0;
    switch (item) {
        case 1:
            result = 100 * cantidad;
            break;
        case 2:
            result = 100 * cantidad;
            break;
        case 3:
            result = 300 * cantidad;
            break;
        case 4:
            result = 300 * cantidad;
            break;
        case 5:
            result = 200 * cantidad;
            break;
        default:
            break;
    }
    return result;
}

function liquidaSueldo() {
    let sum = 0;
    let newItem = true;
    let numItem;
    let cant;
    while (newItem) {
        numItem = Number(prompt("Ingrese el número correspondiente al item"));
        cant = Number(prompt("Ingrese la cantidad"));
        if (numItem === 1) {
            alert("No se puede liquidar el item");
            break;
        }
        sum += liquidaItem(numItem, cant);
        newItem = prompt("¿desea liquidar otro item? si(s)/no(otro)") === "s";
    }
    return sum;
}

let result = liquidaSueldo();

alert("Liquidación final: " + result);
