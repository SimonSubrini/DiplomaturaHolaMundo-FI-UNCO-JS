let Name = prompt("Ingrese su nombre: ");
let Num1 = prompt("Ingrese el primer número: ");
let Num2 = prompt("Ingrese el segundo número: ");

alert(
  "Bienvenido " +
    Name +
    "\n   Suma: " +
    Num1 +
    " + " +
    Num2 +
    " = " +
    parseFloat(parseFloat(Num1) + parseFloat(Num2)) +
    "\n   Resta: " +
    Num1 +
    " - " +
    Num2 +
    " = " +
    parseFloat(parseFloat(Num1) - parseFloat(Num2)) +
    "\n   Producto: " +
    Num1 +
    " * " +
    Num2 +
    " = " +
    parseFloat(parseFloat(Num1) * parseFloat(Num2)) +
    "\n   División: " +
    Num1 +
    " / " +
    Num2 +
    " = " +
    parseFloat(parseFloat(Num1) / parseFloat(Num2)) +
    "\n   Incremento: " +
    Num1 +
    " ++ = " +
    parseFloat(++Num1) +
    "\n   Decremento: " +
    Num1 +
    " -- = " +
    parseFloat(--Num1) +
    "\n   Potencia: " +
    Num1 +
    " ^ " +
    Num2 +
    " = " +
    parseFloat(parseFloat(Num1) ** parseFloat(Num2)) +
    "\n   Modulo: " +
    Num1 +
    " % " +
    Num2 +
    " = " +
    parseFloat(parseFloat(Num1) % parseFloat(Num2))
);
