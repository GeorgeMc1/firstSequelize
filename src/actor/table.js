const {DataTypes} = require("sequelize");
const {openSequelizeConnection} = require("../db/connection");

const Actor = openSequelizeConnection.define("Actor", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    starredIn: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
}, {modelName: "actor"});

module.exports = Actor;