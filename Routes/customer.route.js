const express=require('express');
const { createCustomer } = require('../Controllers/customer.controller');
const customerRouter = express.Router();

const cloudinary=require('../Utils/cloudinary')
const upload=require('../Utils/multer')

customerRouter.post('/create-customer',upload.single('idProofURL'),createCustomer)

module.exports=customerRouter

