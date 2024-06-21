import usersmock from '../db/users.mock.js'
export default class UsersControllers{
    
constructor(){
    this.users = usersmock
}

getAllUsers = (req, res) => {
    res.json(this.users)
}

createUsers = (req, res) => {
    res.send ('Post usuarios desde controllers')
}

updateUsers = (req, res) => {
    res.send ('Update usuarios desde controllers')
}

deleteUsers = (req, res) => {
    res.send ('Delete usuarios desde controllers')
}

}

