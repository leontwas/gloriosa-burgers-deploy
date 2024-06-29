import express from 'express';
import UsersRoutes from './routes/users.routes.js';
import ProductsRoutes from './routes/products.routes.js'; 
import MoviesRoutes from './routes/movies.routes.js';

export default class Server {
    static app = express();

    static middlewares() {
        Server.app.use(express.json()); 
        Server.app.use(express.urlencoded({ extended: true })); 
    }

    static routes() {
        const users = new UsersRoutes();
        const products = new ProductsRoutes();
        const movies = new MoviesRoutes();
        Server.app.use('/movie', movies.router);
        Server.app.use('/user', users.router);
        Server.app.use('/products', products.router);
    }

    static runServer(port) {
        Server.app.listen(port, () => 
            console.log(`Escuchando en http://localhost:${port}`)); 
    }

    static run(port) {
        console.clear();
        Server.middlewares();
        Server.routes();
        Server.runServer(port); 
    }
}