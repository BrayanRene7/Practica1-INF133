const miPromesa = new Promise((resolve) => setTimeout(() => resolve("Datos listos"), 2000));
function convertirACallback(promesa, callback) {
    promesa.then((resultado) => {
        callback(resultado);
    });
}
const miCallback = (dato) => console.log(`Recibido por callback: ${dato}`);
convertirACallback(miPromesa, miCallback);