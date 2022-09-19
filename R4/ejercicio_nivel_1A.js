function sumar(s) {
    s += 1;
    alert(s);
    if (s < 3) {
        sumar(s);
    }
    return s;
}

let s = 0;

sumar(s);
