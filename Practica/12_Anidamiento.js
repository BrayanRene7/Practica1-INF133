const procesoAsincrono = (nombre) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Proceso ${nombre} terminado`), 1000);
    });
};
async function ejecutarTodo() {
    console.log("Iniciando tareas...");
    const res1 = await procesoAsincrono("A");
    console.log(res1);
    const res2 = await procesoAsincrono("B");
    console.log(res2);
    console.log("Fin de todas las tareas");
}
ejecutarTodo();