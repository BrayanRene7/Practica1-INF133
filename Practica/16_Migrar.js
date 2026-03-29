function busqueda(e, personas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = personas.length;
            for (let i = 0; i < n; i++) {
                const { nombre } = personas[i]; 
                if (nombre == e) {
                    resolve("Exito");
                }
            }
            reject("No existe");
        }, 2000); 
    });
}
const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Maria", edad: 25 },
    { nombre: "Pedro", edad: 30 }
];
//Migración
async function buscarMigrada() {
    try {
        console.log("Iniciando búsqueda...");
        const mensaje = await busqueda("Maria", personas); 
        console.log("RESULTADO:");
        console.log(mensaje);
    } catch (error) {
        console.log("ERROR:");
        console.log(error);
    }
}

buscarMigrada();