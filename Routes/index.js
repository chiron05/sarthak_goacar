const express = require('express');
const app = express();

//router file
const customerRoute=require('./customer.route')
const bookingRoute = require('./booking.route');


app.use(customerRoute)
app.use(bookingRoute)

module.exports=app