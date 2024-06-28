import express from 'express';
import MovieControllers from '../controllers/movies.controllers.js'; // Ruta corregida
import Routes from './Routes.js'; // Asumiendo que Routes está en el mismo directorio

export default class MovieRoutes extends Routes {
    constructor() {
        super();
        this.controller = new MovieControllers();
        this.router = express.Router(); // Inicializa el router
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router
            .get('/', this.controller.getAllMovies.bind(this.controller))
            .get('/anyo', this.controller.getMoviesByAnyo.bind(this.controller)) // Rutas distintas para evitar conflicto
            .get('/nombre', this.controller.getMoviesByNombre.bind(this.controller)) // Rutas distintas para evitar conflicto
            .get('/:id', this.controller.getMoviesById.bind(this.controller))
            .post('/', this.controller.createMovies.bind(this.controller))
            .put('/:id', this.controller.updateMovies.bind(this.controller))
            .delete('/:id', this.controller.deleteMovies.bind(this.controller));
    }
}