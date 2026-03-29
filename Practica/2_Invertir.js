const miFuncion = (cad) => {
    let nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
};
let cad = miFuncion("abcd");
console.log("abcd");
console.log(cad); 