import MovieControllers from './controllers/movies.controllers.js';
import Routes from "./Routes.js";

export default class MovieRoutes extends Routes {
    constructor() {
        super();
        this.controller = new MovieControllers();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router
            .get('/', this.controller.getAllMovies.bind(this.controller))
            .get('/movie', this.controller.getMoviesByAnyo.bind(this.controller))
            .get('/movie', this.controller.getMoviesByNombre.bind(this.controller))
            .get('/:id', this.controller.getMoviesById.bind(this.controller))
            .post('/', this.controller.createMovies.bind(this.controller))
            .put('/:id', this.controller.updateMovies.bind(this.controller))
            .delete('/:id', this.controller.deleteMovies.bind(this.controller));
    }
}
