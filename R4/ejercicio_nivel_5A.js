/*
Generá un módulo llamado liquidaItem(item, cantidad) que reciba 
dos parámetros:

"Parámetro #1- Item. Estos ítems se corresponden a los 5 ítems del 
convenio colectivo de trabajo de los informáticos y tienen un monto 
asociado. Los ítem y sus montos son:
#1- Hora Extra: 100$
#2- Guardia de fin de semana: 100$
#3- Hora de Desarrollo Web: 300$
#4- Análisis de Requerimientos: 300$
#5- Diseño de Software: 200$
Parámetro #2- Cantidad. Es un número entero que representa la cantidad 
de ítems de un tipo que deben liquidarse.
Por ej. si el módulo liquidaItem(item, cantidad) recibe los parámetros 
ítem=#3 y cantidad=10, entonces el módulo debe retornar 3000$.
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

alert(
    liquidaItem(
        Number(prompt("Ingrese el número correspondiente al item")),
        Number(prompt("Ingrese la cantidad"))
    )
);
