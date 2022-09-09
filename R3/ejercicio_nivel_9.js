/*
Un usuario tiene diversos horarios en la semana para levantarse, 
ya que algunos días trabaja de forma remota y otros debe asistir 
a la oficina. Por lo que necesita que la alarma que usa para despertarse 
en la mañana suene en horarios distintos, de acuerdo a si ese día debe 
ir a la oficina o si trabaja desde su casa.
Además, los días sabados o domingo prefiere levantarse un poco más tarde, 
ya que no debe trabajar.

Los días y horarios en los que debe sonar su alarma son los siguientes:
- Lunes, miercoles y viernes, trabaja desde su casa, por lo que necesita 
levantarse a las 7:30 AM.
- Martes y jueves, como debe asistir a la oficina, tiene que levantarse 
a las 7 AM.
- Fines de semana prefiere que su alarma suene a las 9 AM.
Te animás a programar la alarma para que muestre un mensaje con 
el horario que va a sonar, dependiendo de la información que 
ingrese el usuario, donde indica día de la semana?
*/

function alarm(day) {
    day = day.toLowerCase();
    let hour;
    if (day === "lunes" || day === "miercoles" || day === "viernes") {
        hour = "7:30 AM";
    } else if (day === "martes" || day === "jueves") {
        hour = "7:00 AM";
    } else if (day === "sabado" || day === "domingo") {
        hour = "9:00 AM";
    } else {
        hour = -1;
    }
    return hour;
}

let day = prompt("Ingrese el día de la semana: ");
if (alarm(day) === -1) {
    alert("Error, se ingreso un dia incorrecto");
} else {
    alert("Horario de la alarma: " + alarm(day));
}
