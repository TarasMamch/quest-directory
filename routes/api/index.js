const router = require('express').Router();
const userRoutes = require('./user-routes')
const flightRoutes = require('./flight-routes')
const hotelRoutes = require('./hotel-routes')
const rentalRoutes = require('./rental-routes')

router.use('/users', userRoutes)
router.use('/flights', flightRoutes)
router.use('/hotels', hotelRoutes)
router.use('/rentals', rentalRoutes)

module.exports = router;