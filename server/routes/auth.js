const express=require("express")
const router=express.Router();

const {login,signup}=require("../controller/Auth")
const {auth,isAdmin}=require("../middleware/auth1")

router.post("/login",login)
router.post("/signup",signup)

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"This is Route for TEST "
    })
})

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to Admin portal !"
    })
})

module.exports=router;