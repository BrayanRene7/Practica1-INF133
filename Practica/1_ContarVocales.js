const contarVocales = (texto) => {
    const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (letra == 'a' || letra == 'A') vocales.a++;
        if (letra == 'e' || letra == 'E') vocales.e++;
        if (letra == 'i' || letra == 'I') vocales.i++;
        if (letra == 'o' || letra == 'O') vocales.o++;
        if (letra == 'u' || letra == 'U') vocales.u++;
    }
    return vocales;
};
let obj = contarVocales("euforia");
console.log(obj);