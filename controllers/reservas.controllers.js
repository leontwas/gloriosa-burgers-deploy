import ReservasDaoMemory from '../db/daos/reservas.dao.memory.js';
import ReservasHelpers from '../helpers/reservas.helpers.js';

export default class ReservasControllers {
    constructor() {
        this.db = new ReservasDaoMemory();
        this.helpers = new ReservasHelpers();
    }

    getAllReservas = (req, res) => {
        try {
            const reservas = this.db.getAllReservas();
            res.json(reservas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getReservasById = (req, res) => {
        try {
            const { id } = req.params;
             if (!reserva) {
           const reserva = this.db.getReservasById(id);
                res.status(404).json({ message: 'Reserva not found' });
                return;
            }
            res.json(reserva);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getReservasByApellido = (req, res) => {
        try {
            const { apellido } = req.query;
            if (!apellido) {
                res.status(400).json({ message: 'Missing apellido query parameter' });
                return;
            }
            const resultado = this.db.getReservasByApellido(apellido);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    createReservas = (req, res) => {
        try {
            const reserva = this.helpers.parseReservas(req.body);
            const resultado = this.db.createReservas(reserva);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    updateReservas = (req, res) => {
        try {
            const reserva = this.helpers.parseInt(req.body);
            const resultado = this.db.updateReservas(reserva);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    deleteReservas= (req, res) => {
        try {
            const { id } = req.params;
            const resultado = this.db.deleteReservas(id);
            res.json(resultado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
