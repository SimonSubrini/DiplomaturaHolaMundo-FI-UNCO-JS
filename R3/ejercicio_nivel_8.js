/*
Es necesario programar una calculadora que realice las 4 
operaciones de suma, resta, multiplicación y división. El 
usuario que utilice la calculadora deberá ingresar los números 
a operar y el tipo de operación que desea realizar. Además, una 
vez que ingresó los datos debería poder ver el resultado del cálculo 
realizado.
Por ejemplo si desea sumar los números 20 y 10, entonces ingresa 
los números y el tipo de operación suma. Luego debería visualizar 
el resultado de la suma: 30.

Tip: Cada uno debe elegir cómo representar las operaciones, 
por ejemplo la operación suma se puede representar mediante 
una letra (s), palabra (suma), simbolo (+) o número (1).
*/

function operation(n1, n2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        default:
            result = "Error";
            break;
    }
    return result;
}

let n1 = Number(prompt("Ingrese el primer número: "));

let operator = prompt(
    "Ingrese el tipo de operación a realizar, segun\n + : Suma\n - : Resta\n * : Multiplicaión\n / : División"
);

let n2 = Number(prompt("Ingrese el segundo número: "));

let result = operation(n1, n2, operator);

if (result === "Error") {
    alert("Error, se a seleccionado un tipo de operación incorrecta");
} else {
    alert(n1 + operator + n2 + "=" + result);
}
