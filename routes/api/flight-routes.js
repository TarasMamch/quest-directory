const express = require('express');
const router = express.Router();
const { User, Flight } = require('../../models')

router.get("/", async (req, res) => {
    try {
        const data = await Flight.findAll({
            include: [User]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Flight.findByPk(req.params.id)
        await data.destroy()
        return res.status(200).json({})
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/", (req, res) => {
    Flight.create({
        airline: req.body.airline,
        first_flight_time: req.body.first_flight_time,
        first_flight_destination: req.body.first_flight_destination,
        second_flight_time: req.body.second_flight_time,
        second_flight_destination: req.body.second_flight_destination,
        price: req.body.price,
        link: req.body.link,
        UserId: req.session.user.id
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

module.exports = router