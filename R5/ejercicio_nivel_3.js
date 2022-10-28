function retornarSumatoria(arr) {
    let sum = 0;
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        sum += arr[i];
    }
    return sum;
}

function buscarPrimerOcurrenciaNumero(arr, n) {
    let id = -1;
    let i = 0;
    while (i < arr.length || arr[i] !== n) {
        if (arr[i] === n) {
            id = i;
        }
        i++;
    }
    return id;
}

function buscarUltimaOcurrenciaNumero(arr, n) {
    let id = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            id = i;
        }
    }
    return id;
}

function retornarArregloPosiciones(arr, char) {
    let ids = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            ids.push(i);
        }
    }
    return ids;
}

alert(retornarSumatoria([1, 2, 3]));
alert(buscarPrimerOcurrenciaNumero([1, 2, 5, 1, 2, 3], 3));
alert(buscarUltimaOcurrenciaNumero([1, 2, 5, 1, 2, 3], 2));
alert(
    retornarArregloPosiciones(
        [
            "r",
            "e",
            "t",
            "o",
            "r",
            "n",
            "a",
            "n",
            "d",
            "o",
            "a",
            "r",
            "r",
            "e",
            "g",
            "l",
            "o",
            "s"
        ],
        "r"
    )
);
