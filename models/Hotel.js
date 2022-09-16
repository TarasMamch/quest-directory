const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Hotel extends Model { }

Hotel.init({
    id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allownull: false
    },
    stars: {
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

module.exports = Hotel