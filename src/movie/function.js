const Movie = require("./table");

exports.createMovie = async (movieObject) => {
    try {
        const newMovie = await Movie.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
}
exports.readMovies = async () => {
    try {
        const movies = await Movie.findAll();
        let temp = [];
        movies.forEach(movie => {
            temp.push({title: movie.title, actor: movie.actor, director: movie.director, rating: movie.rating});
        })
        console.table(temp);
    } catch (error) {
        console.log(error);
    }
}
exports.updateMovie = async (newValue, where) => {
    try {
        await Movie.update(newValue, where);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteMovie = async (where) => {
    try {
        await Movie.destroy(where);
    } catch (error) {
        console.log(error);
    }
}