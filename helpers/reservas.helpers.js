import Reserva from '/models/Reserva.js';

export default class ReservasHelpers {

parseReserva(data){
const {id, nombre, apellido, telefono, email, fecha, menores} = data
const reserva = new Reserva(parseInt(id), nombre, apellido, parseInt(telefono), email, fecha, menores)
return reserva
}

}