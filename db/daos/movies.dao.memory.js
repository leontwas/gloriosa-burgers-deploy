import moviesMock from '../mocks/movies.mock.js'

export default class MoviesDaoMemory {
  
    constructor () {
        this.movies = moviesMock
    }

getAllMovies () {
    res.send ('Películas encontradas: ')
    return this.movies
}

getMoviesById(id) {
    const movie = this.movies.find(movie => 
        movie.id === parseInt(id))
        res.send ('Película encontrada por Id: ')
        return movie
}

getMoviesByNombre(nombre) {
    const resultado = this.movies.find(movie => 
        movie.nombre.toLowerCase() === req.query.movie.toLowerCase())
        res.send ('Películas encontradas por nombre: ')
        return resultado
}

createMovies(movie) {
    this.movie.push(movie)
    res.send ('Película creada desde controllers')
    return true
}    

updateMovies(data) {
    let modMovie = null
    this.movies = this.movies.map(movie => {   
        if (movie.id === data.id) {
            movie = data
        modMovie = movie
        }
        return movie
    })
    res.send ('Película actualizada desde controllers')
    return modMovie
}

deleteMovies (id) {
    let oldlength = this.movie.length
    this.movies = this.movies.filter(movie => 
        movie.id !== parseInt(id))
        return oldLength !== this.movie.length
}
}