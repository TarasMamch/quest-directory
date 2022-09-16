const User = require('./User')
const Flight = require('./Flight')
const Hotel = require('./Hotel')
const Rental = require('./Rental')

User.hasMany(Flight)

Flight.belongsTo(User)

User.hasMany(Hotel)

Hotel.belongsTo(User)

User.hasMany(Rental)

Rental.belongsTo(User)

module.exports = {
    User,
    Flight,
    Hotel,
    Rental
}