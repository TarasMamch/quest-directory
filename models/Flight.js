const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Flight extends Model { }

Flight.init({
    id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
    },
    airline: {
        type: DataTypes.STRING,
        allownull: false
    },
    first_flight_time: {
        type: DataTypes.STRING,
        allownull: false
    },
    first_flight_destination: {
        type: DataTypes.STRING,
        allownull: false
    },
    second_flight_time: {
        type: DataTypes.STRING,
        allownull: false
    },
    second_flight_destination: {
        type: DataTypes.STRING,
        allownull: false
    },
    price: {
        type: DataTypes.STRING,
        allownull: false
    },
    link: {
        type: DataTypes.TEXT,
        allownull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
})

module.exports = Flight