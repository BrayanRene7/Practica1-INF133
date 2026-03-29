const miFuncion = (arreglo) => {
    let pares = [];
    let impares = [];
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        } else {
            impares.push(arreglo[i]);
        }
    }
    return {
        pares: pares,
        impares: impares
    };
};

let obj3 = miFuncion([1, 2, 3, 4, 5]);
console.log([1, 2, 3, 4, 5]);
console.log(obj3);