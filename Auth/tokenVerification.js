const jwt=require('jsonwebtoken')
const httpStatusCodes = require('../constants/http-status-codes');
const User = require('../Models/User');
const { formResponse } = require('../Utils/helper');


const tokenAuthentication=async(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(' ')[1]
    console.log("hey-->"+token);
    if(token==null){
        return res.status(httpStatusCodes[401].code)
        .json(formResponse(httpStatusCodes[401].code, "Token not found"));
    }
    try {
        let getservertoken=await User.findOne({token,_id:req.userId});
        if(!getservertoken){
            res.status(httpStatusCodes[401].code)
            .json(formResponse(httpStatusCodes[401].code, "Token Expired or Invalid"))
        return;
        }
        const data = await jwt.verify(token,'secret bhaii');
        console.log(data)
        req.userId = data.id.userId;
        req.userRole = data.id.userRole;
        return next();
    } catch (error) {
        res.status(httpStatusCodes[401].code)
        .json(formResponse(httpStatusCodes[401].code, "Token Expired or Invalid"))
       return;
    }
}

module.exports=tokenAuthentication