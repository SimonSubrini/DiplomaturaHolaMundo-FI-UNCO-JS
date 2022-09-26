function checkPermissions(type) {
    return type === 5;
}

let type;
do {
    alert("Cohete enviado al espacio");
    type = Number(
        prompt(
            "Ingrese su nivel de permisos según:\n #1- Visitante\n#2- Administrativo\n#3- Ingeniero\n#4- Piloto\n#5- Director"
        )
    );
} while (checkPermissions(type));
