const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Trip extends Model { }

Trip.init({
    id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
})

module.exports = Trip