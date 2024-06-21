export default class ProductsControllers{
    
constructor(){}

getAllProducts = (req, res) => {
    res.send('get productos desde controllers')
}

createProducts = (req, res) => {
    res.send ('Post producto desde controllers')
}

updateProducts = (req, res) => {
    res.send ('Update productos desde controllers')
}

deleteProducts = (req, res) => {
    res.send ('Delete productos desde controllers')
}

}
