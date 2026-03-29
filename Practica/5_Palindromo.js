const miFuncion = (cadena) => {
    let alReves = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        alReves += cadena[i];
    }
    if (cadena === alReves) {
        return true;
    } else {
        return false;
    }
};
console.log("oruro");
console.log(miFuncion("oruro")); // true
console.log("hola");
console.log(miFuncion("hola"));  // false