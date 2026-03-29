function procesoConCallback(nombre, callback) {
    setTimeout(() => {
        callback(`Hola ${nombre}`);
    }, 2000);
}
const procesoPromesa = (nombre) => {
    return new Promise((resolve) => {
        procesoConCallback(nombre, (resultado) => {
            resolve(resultado);
        });
    });
};
procesoPromesa("Luis").then(console.log);