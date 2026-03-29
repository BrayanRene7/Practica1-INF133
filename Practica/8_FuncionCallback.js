function miFuncion(callback) {
    console.log("Iniciando proceso...");
    setTimeout(() => {
        callback();
    }, 2000);
}
miFuncion(() => {
    console.log("Callback ejecutado después de 2 segundos");
});