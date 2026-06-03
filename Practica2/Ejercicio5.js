const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatos'
});
app.delete('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        try {
            await db.query('DELETE FROM productos WHERE categoria_id = ?', [id]);
        } catch (sqlError) {
        }
        const [result] = await db.query('DELETE FROM categorias WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.json({ message: 'Categoría eliminada con éxito (y productos en cascada si aplicaba)' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(3001, () => console.log('Ejercicio 5 listo en http://localhost:3001/categorias/'));