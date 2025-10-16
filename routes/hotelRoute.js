const express = require('express')
const router = express.Router()
const {
    newHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotels
} = require('../controllers/hotelController')

router.post('/', newHotel)
router.put('/:id', updateHotel)
router.delete('/:id', deleteHotel)
router.get('/:id', getHotel)
router.get('/', getAllHotels)

module.exports = router