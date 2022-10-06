const User = require("../Models/User")
const jwt=require('jsonwebtoken');

const maxAge=3*24*60*60;
const createToken=(id)=>{
    return jwt.sign({id},'secret bhaii',{
        expiresIn:maxAge
    })
}

module.exports={
   
   

    login_post:async(req,res)=>{
        try {
           const user=await User.login(req.body.email,req.body.password);
           const token=createToken({userId:user._id,userRole:user.role});
           res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
           const addTokenToServer=await User.findByIdAndUpdate({_id:user._id},{token:token})     
           res.status(200).json(user)
        } catch (err) {
         console.log(err)
             res.status(400).json({
                 message:"Login Unsuccessfull",
                 error:err.message
             })
        }
     },
     
     signup_post:async(req,res)=>{
         try {
            const user=await User.create(req.body);
            const token=createToken({userId:user._id,userRole:user.role});
            res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
            const addTokenToServer=await User.findByIdAndUpdate({_id:user._id},{token:token})
            res.status(201).json(user);
         } catch (error) {
             console.log(error);
             res.status(400).json({
                 message:"User Not Created"
             })
         }
     },
     logout_get:async(req,res)=>{
         res.clearCookie("jwt");
        const removeServerToken=await User.findByIdAndUpdate({_id:`${req.userId}`},{token:''}) ;
        res.json({
         message:"Logout successfullt"
        });
     }
}

