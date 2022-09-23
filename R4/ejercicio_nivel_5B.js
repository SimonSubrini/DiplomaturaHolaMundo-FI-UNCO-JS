/*
Generá otro módulo llamado liquidaSueldo(cantidadItemDistintos) que 
dado un número N de ítems distintos, (N representa un número entero 
  cualquiera) calcule el sueldo de un empleado para ese mes.

Ej: Si invocamos a liquidaSueldo(cantidadItemDistintos) con cantidadItemDistintos=1, 
entonces se solicitará al usuario 1 vez un número de ítem y su cantidad, por ejemplo 
ítem #3 y cantidad 10, para luego utilizar el módulo liquidaItem(3, 10) acumulando 
cada liquidación de ítem en un acumulador y entregando el valor resultante. 
El parámetro cantidadItemDistintos puede tomar cualquier valor entero.
*/

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

function liquidaSueldo(cantidadItemDistintos) {
    let sum = 0;
    for (let i = 0; i < cantidadItemDistintos; i++) {
        sum += liquidaItem(
            Number(prompt("Ingrese el número correspondiente al item")),
            Number(prompt("Ingrese la cantidad"))
        );
    }
    return sum;
}

alert(liquidaSueldo(Number(prompt("Ingrese la cantidad de items a liquidar"))));
