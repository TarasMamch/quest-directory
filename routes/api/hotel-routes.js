const express = require('express');
const router = express.Router();
const { User, Hotel } = require('../../models')

router.get("/", async (req, res) => {
    try {
        const data = await Hotel.findAll({
            include: [User]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await Hotel.findByPk(req.params.id)
        await data.destroy()
        return res.status(200).json({})
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/", (req, res) => {
    Hotel.create({
        name: req.body.name,
        stars: req.body.stars,
        price: req.body.price,
        UserId: req.session.user.id,
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})

module.exports = router