const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Flight, Hotel, Rental } = require('../../models')

router.get("/", async (req, res) => {
    try {
        const data = await User.findAll({
            include: [Flight, Hotel, Rental]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json({ msg: "ERROR", err })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await User.findByPk(req.params.id, {
            include: [Flight, Hotel, Rental]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json({ msg: "ERROR", err })
    }
})


router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(401).json({ msg: "invalid user credentials" })
        }
        if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.status(401).json({ msg: "invalid password credentials" })
        }
        req.session.user = {
            id: foundUser.id,
            username: foundUser.username,
        }
        return res.status(200).json(foundUser)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

module.exports = router;