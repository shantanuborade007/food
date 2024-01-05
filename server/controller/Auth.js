
const User=require("../models/User")
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken")
require("dotenv").config();

exports.signup=async(req,res)=>{
    try{
        
        const{name,email,password,role}=req.body;
        const existUser=await User.findOne({email})

        if(existUser){
            return res.status(400).json({
                success:false,
                message:"User already registered"
            })
        }
        
        //secure the password

        let hashedpassword;
        try{
            hashedpassword=await bcrypt.hash(password,10)
        }catch(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:"Error occoured in hashing the password"
            })
        }

        //create an entery for new user
        const user= new User ({
            name,email,password:hashedpassword,role
        })
        const val=user.save();
        // user.save();

        return res.status(200).json({
            success:true,
            message:"User Created Sucessfully"
        })
        
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:'user cannot be registered',
        })
    }
}
exports.login=async(req,res)=>{
    try{
        
         const {email,password}=req.body;
         if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please enter all the details"
            })
         }

         const user=await User.findOne({email})

         if(!user){
            return res.status(401).json({
                success:false,
                message:"User Not registered"
            })
         }
        
         const payload={
            email:user.email,
            id:user._id,
            role:user.role
         }


         if(await bcrypt.compare(password,user.password)){
            
            let token=jwt.sign(payload,
                            process.env.JWT_SECRET,{
                                expiresIn:"1h"
                            });

            // user=user.toObject();
            user.token=token;
            user.password=undefined;

            const options={
                expires:new Date(Date.now()+ 3*24*60*60*1000),
                httpOnly:true
            }

            res.cookie("shantanuCookie",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User Logged in successfully",
            });

         }
         else{return res.status(403).json({
            success:false,
            message:"Password is Incorrect"
         })

         }
         

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error occoured in Login"
        })
    }
}
