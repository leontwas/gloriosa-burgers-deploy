export default class UsersControllers{
    
constructor(){}

getAllUsers = (req, res) => {
    res.send('get usuarios desde controllers')
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

