import UsersDaoMemory from '../db/daos/users.dao.memory.js';
import UsersHelpers from '../helpers/users.helpers.js';

export default class UsersControllers {
    constructor() {
        this.db = new UsersDaoMemory();
        this.helpers = new UsersHelpers();
    }

    getAllUsers = (req, res) => {
        try {
            const users = this.db.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getUsersById = (req, res) => {
        try {
            const { id } = req.params;
             if (!user) {
           const user = this.db.getUsersById(id);
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getUsersByNombre = (req, res) => {
        try {
            const { nombre } = req.query;
            if (!nombre) {
                res.status(400).json({ message: 'Missing nombre query parameter' });
                return;
            }
            const resultado = this.db.getUsersByNombre(nombre);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    createUsers = (req, res) => {
        try {
            const user = this.helpers.parseUsers(req.body);
            const resultado = this.db.createUsers(user);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    updateUsers = (req, res) => {
        try {
            const user = this.helpers.parseInt(req.body);
            const resultado = this.db.updateUsers(user);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    deleteUsers = (req, res) => {
        try {
            const { id } = req.params;
            const resultado = this.db.deleteUsers(id);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
