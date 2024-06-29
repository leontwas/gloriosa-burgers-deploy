import ProductsDaoMemory from '../db/daos/products.dao.memory.js';
import ProductsHelpers from '../helpers/products.helpers.js';

export default class ProductsControllers{
    
    constructor() {
        this.db = new ProductsDaoMemory();
        this.helpers = new ProductsHelpers();
    }

    getAllProducts = (req, res) => {
        try {
            const products = this.db.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getProductsById = (req, res) => {
        try {
            const { id } = req.params;
             if (!product) {
           const product = this.db.getProductsById(id);
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getProductsByNombre = (req, res) => {
        try {
            const { nombre } = req.query;
            if (!nombre) {
                res.status(400).json({ message: 'Missing nombre query parameter' });
                return;
            }
            const resultado = this.db.getProductsByNombre(nombre);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    createProducts = (req, res) => {
        try {
            const product = this.helpers.parseProducts(req.body);
            const resultado = this.db.createProducts(product);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    updateProducts = (req, res) => {
        try {
            const product = this.helpers.parseInt(req.body);
            const resultado = this.db.updateProducts(product);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    deleteProducts = (req, res) => {
        try {
            const { id } = req.params;
            const resultado = this.db.deleteProducts(id);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}