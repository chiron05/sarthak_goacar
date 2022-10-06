const express=require('express')
var db = require('../Models/index')
const Booking=db.booking
const PickCustomer=db.pickcustomer
const DropCustomer=db.dropcustomer



exports.createVehicleBooking=async(req,res)=>{
   try {
        let data= Booking.build(req.body)
        await data.save();

        if(data.errors){
            res.status(400).json({
                Error:data.errors
            })
        }
        else{
            res.status(200).json(data)
        }
        console.log(data)
   } catch (error) {
    res.status(400).json({
        Error:error
    })
   }
}


exports.pickup=async(req,res)=>{
    try {
        let data= PickCustomer.build(req.body)
        await data.save();

        if(data.errors){
            res.status(400).json({
                Error:data.errors
            })
        }
        else{
            res.status(200).json(data)
        }
        console.log(data)
   } catch (error) {
    res.status(400).json({
        Error:error
    })
   }
   
}



exports.dropoff=async(req,res)=>{
    try {
        let data= DropCustomer.build(req.body)
        await data.save();

        if(data.errors){
            res.status(400).json({
                Error:data.errors
            })
        }
        else{
            res.status(200).json(data)
        }
        console.log(data)
   } catch (error) {
    res.status(400).json({
        Error:error
    })
   }
   
}