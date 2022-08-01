function areaCirculo(r) {
    let A = Math.PI * r ** 2;
    return Math.round(A * 100) / 100;
}

function areaCoronaCircular(r1, r2) {
    return Math.round(Math.abs(areaCirculo(r2) - areaCirculo(r1)) * 100) / 100;
}

let r1 = 2;
let r2 = 4;

alert(
    "r1: " +
        r1 +
        "\nr2: " +
        r2 +
        "\nArea 1: " +
        areaCirculo(r1) +
        "\nArea 2: " +
        areaCirculo(r2) +
        "\nArea corona: " +
        areaCoronaCircular(r1, r2)
);
