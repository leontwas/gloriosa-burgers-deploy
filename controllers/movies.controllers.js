import MoviesDaoMemory from '../db/daos/movies.dao.memory.js';
import MoviesHelpers from '../helpers/movies.helpers.js';

export default class MovieControllers {

        constructor() {
            this.db = new MoviesDaoMemory();
            this.helpers = new MoviesHelpers();
        }
    
    getAllMovies = (req, res) => {
        try {
            const movies = this.db.getAllMovies();
            res.json(movies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getMoviesById = (req, res) => {
        try {
            const { id } = req.params;
             if (!movie) {
           const movie = this.db.getMoviesById(id);
                res.status(404).json({ message: 'Movie not found' });
                return;
            }
            res.json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getMoviesByAnyo = (req, res) => {
        try {
            const { anyo } = req.params;
             if (!movie) {
           const movie = this.db.getMoviesByAnyo(anyo);
                res.status(404).json({ message: 'Movie not found' });
                return;
            }
            res.json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    getMoviesByNombre = (req, res) => {
        try {
            const { nombre } = req.query;
            if (!nombre) {
                res.status(400).json({ message: 'Missing nombre query parameter' });
                return;
            }
            const resultado = this.db.getMoviesByNombre(nombre);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    createMovies = (req, res) => {
        try {
            const movie = this.helpers.parseMovies(req.body);
            const resultado = this.db.createMovies(movie);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    updateMovies = (req, res) => {
        try {
            const movie = this.helpers.parseInt(req.body);
            const resultado = this.db.updateMovies(movie);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    deleteMovies = (req, res) => {
        try {
            const { id } = req.params;
            const resultado = this.db.deleteMovies(id);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
