const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
app.use(express.json());
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatos'
});

app.patch('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const [existe] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
        if (existe.length === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        const nuevoNombre = nombre || existe[0].nombre;
        const nuevaDescripcion = descripcion !== undefined ? descripcion : existe[0].descripcion;
        await db.query(
            'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
            [nuevoNombre, nuevaDescripcion, id]
        );
        res.json({ message: 'Categoría actualizada correctamente con PATCH' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => console.log('http://localhost:3001/categorias/'));