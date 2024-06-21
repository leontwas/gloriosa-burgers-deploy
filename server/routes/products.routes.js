import ProductsControllers from"../../controllers/products.controllers.js";
import Routes from "./Routes.js";

export default class ProductsRoutes extends Routes {

    constructor (){
    super()
    this.controller = new ProductsControllers()
    this.getRoutes()
    }

    get Routes(){
      this.router
      .get('/', this.controller.getAllProducts)
      .post('/', this.controller.createProducts)
      .put('/', this.controller.updateProducts)
      .delete('/:id', this.controller.deleteProducts)
    }
}