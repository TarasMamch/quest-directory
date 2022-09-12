const express = require("express")
const cors = require("cors")
const routes = require('./routes')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const sequelize = require('./config/connection')
const SequelizeStore = require("connect-session-sequelize")(session.Store)

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
)

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
    },
    resave: false,
    saveUninitialized: true,
    Store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))

app.use(routes)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})