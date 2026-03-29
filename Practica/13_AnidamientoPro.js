const obtenerUsuario = () => new Promise(res => setTimeout(() => res({id: 1, nombre: "Juan"}), 1000));
const obtenerPosts = (id) => new Promise(res => setTimeout(() => res(["Post 1", "Post 2"]), 1000));
const mostrarInformacion = async () => {
    const { id, nombre } = await obtenerUsuario();
    console.log(`Cargando datos de: ${nombre}`);
    const posts = await obtenerPosts(id);
    console.log(`Posts encontrados: ${posts}`);
};
mostrarInformacion();