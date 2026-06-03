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
app.post('/categorias', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        
        if (!nombre) {
            return res.status(400).json({ error: 'El nombre es obligatorio' });
        }

        const [result] = await db.query(
            'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', 
            [nombre, descripcion]
        );

        res.status(201).json({ 
            id: result.insertId, 
            nombre, 
            descripcion,
            message: 'Categoría creada con éxito' 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => console.log('http://localhost:3001/categorias'));