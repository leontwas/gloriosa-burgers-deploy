import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.json());

// Obtener el nombre de archivo y directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir archivos estáticos desde la carpeta 'public/src/css'
app.use(express.static(path.join(__dirname, 'public', 'src', 'css')));


const PORT = 3000;

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para servir otros archivos HTML
app.get('/:page', (req, res) => {
    const page = req.params.page;
    const validPages = ['productos', 'novedades', 'reservas', 'nosotros'];
    if (validPages.includes(page)) {
        res.sendFile(path.join(__dirname, 'public', `${page}.html`));
    } else {
        res.status(404).send('Página no encontrada');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});