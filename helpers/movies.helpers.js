import Movie from "../models/Movie.js"

export default class MoviesHelpers {

parseUser(data){
const {id, nombre, anyo} = data
const movie = new Movie(parseInt(id), nombre, parseInt(anyo))
return movie
}

}