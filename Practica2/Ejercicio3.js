const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatos'
});
app.get('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [categoria] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
        if (categoria.length === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        let productos = [];
        try {
            const [prodRows] = await db.query('SELECT * FROM productos WHERE categoria_id = ?', [id]);
            productos = prodRows;
        } catch (sqlError) {
            productos = []; 
        }
        res.json({
            ...categoria[0],
            productos: productos
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(3001, () => console.log('http://localhost:3001/categorias/'));