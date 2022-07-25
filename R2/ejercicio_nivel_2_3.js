/*  Consigna:

Yar yar bin es muy olvidadizo, 
siempre se le olvida como convertir centímetros a metros. 
Necesita que le programes un conversor de unidades utilizando funciones, 
que a partir de una cantidad de de centímetros ingresada por teclado, 
le convierta y le muestre cuanto equivale en metros. 
Recordar que 1 metro = 100 centímetros 
*/

function cm2m(cm) {
    return cm / 100;
}

let cm = prompt("Ingrese la magnitud en cm: ");
alert(cm + "cm -> " + cm2m(cm) + "m");
