const Movie = require("./movie/table");
const Actor = require("./actor/table");
const User = require("./user/table");

Movie.hasMany(Actor);
Actor.belongsToMany(Movie, {through:"actorMovies"});

User.hasMany(Movie);
Movie.belongsToMany(User, {through:"userMovies"});