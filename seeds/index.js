const sequelize = require('../config/connection');
const { User, Flight, Hotel, Rental } = require('../models')

const users = [
    {
        username: "Lorem",
        password: "password"
    }
]

const flights = []

const hotels = []

const rentals = []

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')
    await User.bulkCreate(users, { individualHooks: true })
    await Flight.bulkCreate(flights)
    await Hotel.bulkCreate(hotels)
    await Rental.bulkCreate(rentals)
    console.log('\n----- ALL IS DONE, EXITING -----\n')

    process.exit(0);
};

seedAll();