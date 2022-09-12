const User = require('./User')
const Trip = require('./Trip')

User.hasMany(Trip)

Trip.belongsTo(User)

module.exports = {
    User,
    Trip
}