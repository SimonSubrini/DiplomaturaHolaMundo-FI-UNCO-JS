let Name = prompt("Ingrese su nombre: ");
let CreationYear = prompt("Ingrese el año de creación de la cuenta: ");
let BirthYear = prompt("Ingrese su año de nacimiento: ");

let CurrentTime = new Date();
let Year = CurrentTime.getFullYear();

let Age = Year - BirthYear;
let Antiquity = Year - CreationYear;
let Over18 = Age >= 18 ? "Si" : "No";

alert(
    "Datos completos del usuario:\n  Nombre: " +
        Name +
        "\n  Año de creación de la cuenta: " +
        CreationYear +
        "\n  Año de nacimiento: " +
        BirthYear +
        "\n  Edad: " +
        Age +
        " Años" +
        "\n  Antigüedad: " +
        Antiquity +
        " Años" +
        "\n  Mayor de 18: " +
        Over18
);
