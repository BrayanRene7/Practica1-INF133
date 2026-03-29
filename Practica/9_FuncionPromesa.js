const miPromesa = new Promise((resolve, reject) => {
    console.log("Esperando respuesta de la promesa...");
    setTimeout(() => {
        resolve("Operación exitosa: Mensaje recibido tras 3 segundos");
    }, 3000);
});
miPromesa.then((mensaje) => {
    console.log(mensaje);
});