// const jwt=require('jsonwebtoken');
// const User = require('../Models/User');


// exports.requireAuthentication=(req,res,next)=>{
//     const token=req.cookies.jwt;

//     //check jsonwebtoken is exist and verified
//     if(token){
//        jwt.verify(token,'secret bhaii',(err,decodedToken)=>{
//             if(err){
//                 res.json({
//                     message:"Redirect to login"
//                 })
//             }
//             else{
//                 console.log(decodedToken);
//                 next();
//             }
//        })
//     }
//     else{
//         res.json({
//             message:"Redirect to login"
//         })
//     }
// }

// exports.checkUser=(req,res,next)=>{
//     const token=req.cookies.jwt;
//     if(token){
//         jwt.verify(token,'secret bhaii',async(err,decodedToken)=>{
//              if(err){
//                 console.log(err);
//                 next();
//              }
//              else{
                
//                  let user=await User.findById({_id:decodedToken.userId});
               
//                  req.body.email=user.email
//                 //  console.log( "hey"+req.body.email);
//                  next();
//              }
//         })
//      }
//      else{

//      }

// }

