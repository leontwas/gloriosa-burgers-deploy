import usersmock from '../db/users.mock.js'
import UsersHelpers from '../helpers/users.helpers.js'
export default class UsersControllers{
    
constructor(){
    this.users = usersmock
    this.helpers = new UsersHelpersHelpers()
}

getAllUsers = (req, res) => {
    res.json(this.users)
}

getUsersById = (req, res) => {
    const {id} = req.params.id
    const user = this.user.find(user => 
        user.id === parseInt(id))
        res.json(user? user: {user: null})
}

getUsersByNombre = (req, res) => {
    const resultado = this.user.find(user => 
        user.nombre.toLowerCase() === req.query.nombre.toLowerCase())
        res.json(resultado)
}

createUsers = (req, res) => {
    const user = this.helpers.parseUsers(req.body)
    this.user.push(user) 
    res.send('Post usu  rios desde controllers')
    res.json(user)
}    

updateUsers = (req, res) => {
    let modUser = null
    this.users = this.users.map(user => {   
    if (user.id === parseInt(req.body.id)){
        user = this.helpers.parseInt(req.body)
        modUser = user
    }
    return user
    })
    res.send ('Update usuarios desde controllers')
    res.json (modUser)
}

deleteUsers = (req, res) => {
    const {id} = req.params.id
    this.user = this.users.filter(user => user.id !== parseInt(id))
    res.send ('Delete usuarios desde controllers')
    res.json (this.users)
}

}

