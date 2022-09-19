for (var i = 1; i <= 10; i++) {
    if (
        Number(prompt("Paciente N°" + i + "\nIngrese la presión medida: ")) > 11
    ) {
        alert("Debe disminuir su consumo de sal");
    }
}
