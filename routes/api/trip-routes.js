const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { Trip, User } = require('../../models')

router.get("/", (req, res) => {
    Trip.findAll({
        include: [User]
    })
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.status(500).json({ msg: "ERROR", err })
        })
})

// router.post("/", (req, res) => {
//     Trip.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     }).then(data => {
//         res.json(data)
//     }).catch(err => {
//         res.status(500).json({ msg: "ERROR", err })
//     })
// })

module.exports = router;