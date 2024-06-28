import Product from '/models/Product.js';

export default class ProductsHelpers {

parseUser(data){
const {id, nombre, precio} = data
const product = new Product(parseInt(id), nombre, parseInt(precio))
return product
}

}