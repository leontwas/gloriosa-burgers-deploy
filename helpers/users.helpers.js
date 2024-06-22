import User from "../models/User.js"

export default class UsersHelpers {

parseUser(data){
const {id, funcion, nombre, edad} = data
const user = new User(parseInt(id), funcion, nombre, parseInt(edad))
return user
}

}