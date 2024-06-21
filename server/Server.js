import express from 'express'
import UsersRoutes from './routes/users.routes.js'
export default class Server{
    static app = express()

static routes() {
    const users = new UsersRoutes()
    const products = new ProductsRoutes()
Server.app.use('/user', users.router)
Server.app.use('/products', products.router)
}

    static runServer(port){
        Server.app.listen(port, () => 
            console.log ('Escuchando en http://localhost${port}'))
    }
    static run(port) {
        console.clear()
        Server.routes()
        Server.runServer()
    }
}