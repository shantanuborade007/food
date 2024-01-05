//auth,isStudent,isAdmin
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.auth=async(req,res,next)=>{

    try{

        const token=req.body.token || req.cookies.token

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Not found"
            })
        }

        try{

            const payload=jwt.verify(token,process.env.JWT_SECRET)
            req.user = payload;


        }catch(err){
            console.log(err);
            res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next();

    }catch(err){
        console.log(err);
        res.status(401).json({
            success:true,
            message:"Error occoured while verifying the token"
        })
    }
}

exports.isuser=(req,res,next)=>{
    try{
        // Admin","user"
        if(req.user.role!=="user"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for the user !"
            })

        }
        next();
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"user role is not matching"
        })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        // Admin","user"
        if(req.user.role!=="admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for the Admin !"
            })

        }
        next();
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"user role is not matching"
        })
    }
}