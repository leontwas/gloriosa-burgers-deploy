import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Convertir __filename y __dirname a ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Usa una ruta relativa para la importación
import movieRoutes from './routes/movies.routes.js';

const app = express();

app.use(express.json());
app.use('/movies', movieRoutes); // Asegúrate de que la ruta tenga una barra inclinada al principio

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`); 
});