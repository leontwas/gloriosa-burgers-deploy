import User from '../models/User.js'

export default class UsersHelpers {

parseUser(data){
const {id, nombre, edad} = data
const user = new User(parseInt(id), nombre, parseInt(edad))
return user
}

}