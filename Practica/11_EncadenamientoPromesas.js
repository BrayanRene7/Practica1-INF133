const paso1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Paso 1 completado"), 1000);
    });
};
const paso2 = (mensajeAnterior) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mensajeAnterior + " y Paso 2 completado"), 1000);
    });
};
paso1()
    .then((resultado1) => paso2(resultado1))
    .then((resultadoFinal) => {
        console.log(resultadoFinal);
    });