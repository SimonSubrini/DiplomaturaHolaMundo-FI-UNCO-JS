let Result_1 = (!false || true) && (true || false);
let Result_2 = (!true || false) && (true || false);

alert(
    "Operadores &&, || y !: \n  (!false || true) && (true || false) -> " +
        Result_1 +
        "\n  (!true || false) && (true || false) -> " +
        Result_2
);
