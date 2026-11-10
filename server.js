const express = require('express');
const app = express();
const PORT = 3000;

const canchas = [
    { id: 1, nombre: "Cancha 1 - KRT98 Arena", precioHora: 120.000 },
    { id: 2, nombre: "Cancha 2 - KRT98 Arena", precioHora: 120.000 },
    { id: 3, nombre: "Cancha 3 - KRT98 Arena", precioHora: 120.000 },
    { id: 4, nombre: "Cancha 4 - KRT98 Arena", precioHora: 120.000 }
];

app.get('/', (req, res) => {
    res.json({ mensaje: "Hola cancheros, Bienvenido a la API de krt98-api" });
});

app.get('/canchas', (req, res) => {
    res.json(canchas);
})

app.listen(PORT, () => {
    console.log(`Servidor krt98 corriendo en http://localhost:${PORT}`);
});
