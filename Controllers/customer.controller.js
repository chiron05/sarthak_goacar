const express=require('express')
// const Customer =require('../Models/customer.model')
var db = require('../Models/index')
const cloudinary=require('../Utils/cloudinary')
const upload=require('../Utils/multer')

const Customer=db.customer;


exports.createCustomer=async(req,res,next)=>{

    try {
        const result=await cloudinary.uploader.upload(req.file.path);
        let data= Customer.build({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            phoneNumber:req.body.phoneNumber,
            idProofURL:result.url
        })

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

