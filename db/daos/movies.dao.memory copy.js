import productsMock from '../products.mock.js'

export default class MoviesDaoMemory {
  
    constructor () {
        this.products = productsMock
    }

getAllProducts () {
    res.send ('Usuarios encontrados: ')
    return this.products
}

getProductsById(id) {
    const product = this.product.find(product => 
        product.id === parseInt(id))
        res.send ('Producto encontrado por Id: ')
        return product
}

getProductByNombre(nombre) {
    const resultado = this.product.find(product => 
        product.nombre.toLowerCase() === req.query.product.toLowerCase())
        res.send ('Productos encontrados por nombre: ')
        return resultado
}

createProducts(movie) {
    this.product.push(product)
    res.send ('Producto creado desde controllers')
    return true
}    

updateProducts(data) {
    let modProduct = null
    this.products = this.products.map(product => {   
        if (product.id === data.id) {
            product = data
        modProduct = product
        }
        return product
    })
    res.send ('Producto actualizado desde controllers')
    return modProduct
}

deleteProduct (id) {
    let oldlength = this.product.length
    this.product = this.product.filter(product => 
        product.id !== parseInt(id))
        return oldLength !== this.product.length
}
}