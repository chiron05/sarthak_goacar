const express=require('express')
const { pickup, dropoff, createVehicleBooking } = require('../Controllers/booking.controller')
const bookingRoute=express.Router()


bookingRoute.post('/vehicleBooking',createVehicleBooking)
bookingRoute.post('/vehicleBooking/pickup',pickup)
bookingRoute.post('/vehicleBooking/dropoff',dropoff)



module.exports=bookingRoute