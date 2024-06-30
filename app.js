import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import movieRoutes from './src/routes/movies.routes.js';

const app = express();

app.use(express.json());

/*
app.use('/movies', movieRoutes);

app.get("/miRuta", (req, res) => {
    res.send('Hola Mundo!');
});
*/

// Obtener el nombre de archivo y directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

// Ruta para servir el archivo reservas.html
app.get('/src/htmls/reservas', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'htmls', 'reservas.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
