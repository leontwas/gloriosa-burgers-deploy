import express from 'express';
import movieRoutes from './routes/movie.routes.js';
const app = express()

app.use(express.json());
app.use('movies', movieRoutes);

const PORT = 3000;

app.listen (PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`); 
    });

