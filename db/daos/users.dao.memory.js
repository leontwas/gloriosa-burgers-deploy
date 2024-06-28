import usersMock from '../mocks/users.mock.js'

export default class UsersDaoMemory {
  
    constructor () {
        this.user = usersMock
    }

getAllUsers () {
    res.send ('Usuarios encontrados: ')
    return this.users
}

getUsersById(id) {
    const user = this.user.find(user => 
        user.id === parseInt(id))
        res.send ('Usuario encontrado por Id: ')
        return user
}

getUsersByNombre(nombre) {
    const resultado = this.user.find(user => 
        user.nombre.toLowerCase() === req.query.nombre.toLowerCase())
        res.send ('Usuarios encontrados por nombre: ')
        return resultado
}

createUsers(user) {
    this.user.push(user)
    res.send ('Usuario creado desde controllers')
    return true
}    

updateUsers(data) {
    let modUser = null
    this.users = this.users.map(user => {   
        if (user.id === data.id) {
        user = data
        modUser = user
        }
        return user
    })
    res.send ('Usuario actualizado desde controllers')
    return modUser
}

deleteUsers (id) {
    let oldlength = this.user.length
    this.user = this.users.filter(user => 
        user.id !== parseInt(id))
        return oldLength !== this.user.length
}
}