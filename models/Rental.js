const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Rental extends Model { }

Rental.init({
    id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
    },
    vender: {
        type: DataTypes.STRING,
        allownull: false
    },
    name: {
        type: DataTypes.STRING,
        allownull: false
    },
    price: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true
})

module.exports = Rental