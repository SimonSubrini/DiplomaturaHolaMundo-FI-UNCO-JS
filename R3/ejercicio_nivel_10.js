/* 
Te pronpongo un ejercicio totalmente distinto.
Necesitamos poder modificar el color de fondo de la página web 
donde se proyecta tu archivo html.
El cambio de color se puede hacer mediantela siguiente función:
function cambiarFondo(color) {
document.body.style.backgroundColor = color;
}

Esta función se encarga de asignarle un nuevo estilo de color al 
fondo de la página que actualmente es blanco.
El parametro color puede tomar los siguientes string de valores:
"green" => se verá en verde
"red" => se verá en rojo
"blue" => se verá en azul
"yellow" = > se verá en color amarillo
En este caso vas a tener que pedirle al usuario que ingrese un color 
entre las distintas opciones que le des a elegir, y de acuerdo al 
color elegido deberías poder cambiar el color de fondo de la página 
web en tu codeSanbox.
*/

function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

let color = prompt(
    "Ingrese un color según:\ngreen => se verá en verde\nred => se verá en roj\nblue => se verá en azul\nyellow = > se verá en color amarillo"
);
//color = color.toLowerCase();
if (
    color === "green" ||
    color === "red" ||
    color === "blue" ||
    color === "yellow"
) {
    cambiarFondo(color);
} else {
    alert("Se ingreso un color incorrecto");
}
