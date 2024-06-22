import UsersControllers from "../../controllers/users.controllers.js";
import Routes from "./Routes.js";

export default class UsersRoutes extends Routes {

    constructor (){
    super()
    this.controller = new UsersControllers()
    this.getRoutes()
}

    get Routes(){
      this.router
      .get('/', this.controller.getAllUsers)
      .get('/user', this.controller.getUsersByNombre)
      .get('/:id', this.controller.getUsersById)
      .post('/', this.controller.createUsers)
      .put('/', this.controller.updateUsers)
      .delete('/:id', this.controller.deleteUsers)
    }
}