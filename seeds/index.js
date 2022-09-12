const sequelize = require("../config/connection");

const { User } = require("../models");

const users = [
    {
        username: "joeLovesCats",
        password: "password"
    },
    {
        username: "BaShiva",
        password: "weAreTheBest"
    }
]

const seedMe = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users, { individualHooks: true })
    process.exit(0)
}

seedMe()