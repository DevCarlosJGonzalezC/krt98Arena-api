const express = require('express');
const app = express();
const PORT = 3000;

const canchas = [
    { id: 1, nombre: "Cancha 1 - ⚪ Bernabeu", precioHora: 120000, tipo: "Sintetica 9vs9", capacidad: 18 },
    { id: 2, nombre: "Cancha 2 - 🟣 Camp Nou", precioHora: 120000, tipo: "Sintetica 7vs7", capacidad: 14 },
    { id: 3, nombre: "Cancha 3 - 🔴 Allianz Arena", precioHora: 120000, tipo: "Sintetica 8vs8", capacidad: 16 },
    { id: 4, nombre: "Cancha 4 - 🔵 Metropolitano", precioHora: 120000, tipo: "Sintetica 6vs6", capacidad: 12 }
];

app.get('/canchas', (req, res) => {
    res.json({ mensaje: "Hola cancheros, Bienvenido a la API de krt98-api" });
});

app.get('/canchas', (req, res) => {
    res.json(canchas);
});

app.get('/canchas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cancha = canchas.find(c => c.id === id);
    if (!cancha) {
        return res.status(404).json({ mensaje: "Cancha no encontrada" });
    }
    res.json(cancha);
});

app.listen(PORT, () => {
    console.log(` 👨‍💻 Servidor krt98 corriendo en http://localhost:${PORT}`);
});
