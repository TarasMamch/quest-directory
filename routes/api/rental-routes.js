const express = require('express');
const router = express.Router();
const { User, Rental } = require('../../models')

router.get("/", async (req, res) => {
    try {
        const data = await Rental.findAll({
            include: [User]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Rental.findByPk(req.params.id)
        await data.destroy()
        return res.status(200).json({})
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/", (req, res) => {
    Rental.create({
        vender: req.body.vender,
        name: req.body.name,
        price: req.body.price,
        UserId: req.session.user.id,
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

module.exports = router