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
app.get('/public/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para servir el archivo productos.html
app.get('/public/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'productos.html'));
});

// Ruta para servir el archivo novedades.html
app.get('/public/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'novedades.html'));
});

// Ruta para servir el archivo reservas.html
app.get('/public/reservas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reservas.html'));
});

// Ruta para servir el archivo productos.html
app.get('/public/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nosotros.html'));
});

// Ruta para servir el archivo fuentes
app.get('/public/src/css/fuentes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'fuentes.css'));
});

// Ruta para servir el archivo styleHeader.css
app.get('/public/src/css/styleHeader', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'stylehHeader.css'));
});

// Ruta para servir el archivo styleFooter.css
app.get('/public/src/css/styleHeader', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'stylehFooter.css'));
});

// Ruta para servir el archivo styleIndex.css
app.get('/public/src/css/styleIndex', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'styleIndex.css'));
});

// Ruta para servir el archivo styleProductos.css
app.get('/public/src/css/styleProductos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'styleProductos.css'));
});

// Ruta para servir el archivo styleNovedades.css
app.get('/public/src/css/styleNovedades', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'styleNovedades.css'));
});

// Ruta para servir el archivo styleReserva.css
app.get('/public/src/css/styleHeader', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'styleReserva.css'));
});

// Ruta para servir el archivo styleNosotrtos.css
app.get('/public/src/css/styleNosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'src', 'css', 'styleNosotros.css'));
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
