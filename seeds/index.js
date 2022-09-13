const sequelize = require("../config/connection");

const { User } = require("../models");

const users = [
    {
        username: "ThisIsTest",
        password: "password"
    }
]

const seedMe = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users, { individualHooks: true })
    process.exit(0)
}

seedMe()