const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededatos'
});
app.get('/categorias', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM categorias');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(3001, () => console.log('http://localhost:3001/categorias'));