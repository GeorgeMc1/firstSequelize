const Movie = require("./movie/table");
const Actor = require("./actor/table");
const User = require("./user/table");

Movie.hasMany(Actor, {foreignKey:"name"});
Actor.belongsToMany(Movie, {foreignKey: "name", through:"actorMovies"});

User.hasMany(Movie, {foreignKey:"title"});
Movie.belongsToMany(User, {foreignKey: "title", through:"userMovies"});