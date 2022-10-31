function retornarCopia(arr) {
    return arr;
}

function cargarArregloJugadores() {
    let arrJugadores = ["#"];
    for (let i = 0; i < 4; i++) {
        arrJugadores.unshift(
            prompt("Equipo 1:\nIngrese el nombre del jugador")
        );
    }
    for (let i = 0; i < 4; i++) {
        arrJugadores.push(prompt("Equipo 2:\nIngrese el nombre del jugador"));
    }
    return arrJugadores;
}

function sortearReferentes(arrJugadores) {
    let referentes = [];
    referentes.push(arrJugadores[Math.floor(Math.random() * 4)]);
    referentes.push(arrJugadores[Math.floor(Math.random() * 4) + 5]);
    return referentes;
}

function MostrarResultadosParciales(jugadores, referentes) {
    alert(
        "Equipos: " +
            jugadores +
            "\n\nReferentes:\n   Equipo 1 - " +
            referentes[0] +
            "\n   Equipo 2 - " +
            referentes[1]
    );
}

function actualizarArreglo(equipo, resultado, jugadores, referentes) {
    if (
        (equipo === 1 && resultado === true) ||
        (equipo === 2 && resultado === false)
    ) {
        let eliminado = jugadores.pop();
        alert(
            "El equipo 2 pierde a un jugador, el jugador eliminado es " +
                eliminado
        );
    } else {
        let eliminado = jugadores.shift();
        alert(
            "El equipo 1 pierde a un jugador, el jugador eliminado es " +
                eliminado
        );
    }
    MostrarResultadosParciales(jugadores, referentes);
}

function comprobarCantidadJugadores(jugadores) {
    let equipo = 1;
    let cantJugadores = [0, 0];
    for (let i = 0; i < jugadores.length; i++) {
        if (jugadores[i] !== "#") {
            cantJugadores[equipo - 1] += 1;
        } else {
            equipo = 2;
        }
    }
    return Math.min(...cantJugadores);
}

function realizarPregunta() {
    return true;
}
// -------------------------   código principal del juego   ------------------------------------

//let jugadores=cargarArregloJugadores()
let jugadores = ["a", "s", "d", "f", "#", "z", "x", "c", "v"];
let copyJugadores = retornarCopia();
let referentes = sortearReferentes(jugadores);

MostrarResultadosParciales(jugadores, referentes);

let flagDone = false;
let turno = 1;
let cont = 0;
while (!flagDone) {
    actualizarArreglo(turno, realizarPregunta(), jugadores, referentes);
    let cantMin = comprobarCantidadJugadores(jugadores);
    alert("cantMin: " + cantMin);
    if (cantMin <= 0) {
        flagDone = true;
    }

    turno = turno === 1 ? 2 : 1;

    cont++;
    if (cont === 10) {
        flagDone = true;
    }
}
