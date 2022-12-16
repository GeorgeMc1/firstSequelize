const {DataTypes} = require("sequelize");
const {openSequelizeConnection} = require("../db/connection");

const Movie = openSequelizeConnection.define("Movie2", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified",
    },
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified"
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {modelName: "movie"});

module.exports = Movie;