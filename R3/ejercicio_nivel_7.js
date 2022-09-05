/*
Una reconocida empresa de telefonía celular necesita que se programe un menú 
de opciones para utilizar en su línea telefónica de atención al usuario. 
El menú se compone de los siguientes items:

1: Valor de su última factura.
2: Conocer fecha del próximo vencimiento de su factura.
3: Comunicarse con gestion de ventas.
4: Comunicarse con un operador de atención al cliente.
5: Comunicarse con un operador de soporte técnico.
0: Terminar la llamada.
Una vez que el usuario elija una opción se deberá mostrar un mensaje acorde a 
dicha elección. Por ejemplo, si el usuario elige la opción 3 se podría mostrar el mensaje:
"En instantes será atendido por uno de nuestros representantes en ventas."
En caso de que el usuario ingrese un valor que no está contemplado en el menú, 
se le deberá informar que la opción es incorrecta.
*/

function call(option) {
    let txt = "Usted ingreso la opción --> ";
    switch (option) {
        case 1:
            txt += "Valor de su última factura.";
            break;
        case 2:
            txt += "Conocer fecha del próximo vencimiento de su factura.";
            break;
        case 3:
            txt += "Comunicarse con gestion de ventas.";
            txt +=
                "En instantes será atendido por uno de nuestros representantes en ventas.";
            break;
        case 4:
            txt += "Comunicarse con un operador de atención al cliente.";
            txt +=
                "En instantes será atendido por uno de nuestros representantes de atención al cliente.";
            break;
        case 5:
            txt += "Comunicarse con un operador de soporte técnico.";
            txt +=
                "En instantes será atendido por uno de nuestros representantes de soporte técnico.";
            break;
        case 0:
            txt += "Terminar la llamada.";
            break;
        default:
            txt = "Ingreso una opción incorrecta";
    }
    return txt;
}

alert(call(Number(prompt("Ingrese un número: "))));
