import reservasMock from '../mocks/reservas.mock.js'

export default class ReservasDaoMemory {
  
    constructor () {
        this.reservas = reservasMock
    }

getAllReservas () {
    res.send ('Reservas encontradas: ')
    return this.reservas
}

getReservaById(id) {
    const reserva = this.reservas.find(reserva => 
        mreserva.id === parseInt(id))
        res.send ('Reserva encontrada por Id: ')
        return reserva
}

getReservaByApellido(apellido) {
    const resultado = this.reserva.find(reserva => 
       reserva.nombre.toLowerCase() === req.query.apellido.toLowerCase())
        res.send ('Reservas encontradas por apellido: ')
        return resultado
}

createReservas(reserva) {
    this.reserva.push(reserva)
    res.send ('Reserva creada desde controllers')
    return true
}    

updateReserva(data) {
    let modReserva = null
    this.reservas = this.reservas.map(reserva => {   
        if (reserva.id === data.id) {
            reserva = data
        modReserva = reserva
        }
        return reserva
    })
    res.send ('Reserva actualizada desde controllers')
    return modReserva
}

deleteReserva (id) {
    let oldlength = this.reserva.length
    this.reservas = this.reservas.filter(reserva => 
        reserva.id !== parseInt(id))
        return oldLength !== this.reserva.length
}
}