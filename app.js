import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import movieRoutes from './src/routes/movies.routes.js';

const app = express();

app.use(express.json());

// Obtener el nombre de archivo y directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

// Ruta para servir el archivo index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para servir el archivo productos.html
app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'productos.html'));
});

// Ruta para servir el archivo novedades.html
app.get('/novedades', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'novedades.html'));
});

// Ruta para servir el archivo reservas.html
app.get('/reservas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reservas.html'));
});

// Ruta para servir el archivo nosotros.html
app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nosotros.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
