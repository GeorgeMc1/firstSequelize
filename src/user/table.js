const {DataTypes} = require("sequelize");
const {openSequelizeConnection} = require("../db/connection");

const User = openSequelizeConnection.define("user", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favMovies: {
        type: DataTypes.STRING
    }
}, {modelName: "user"});

module.exports = User;