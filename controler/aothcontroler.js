const asyncHandler=require('express-async-handler')
const {User,validateLoginUser,validateRigisterUser,validateUpdateUser}=require("../models/User")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

 /*
regester new user
*/
const regesterUser=asyncHandler(async(req,res)=>{
    const {error}=validateRigisterUser(req.body)
        if (error) {
           return res.status(400).json(error.details[0].message)                
        }
    const user= await User.findOne({email:req.body.email})
        if(user){
           return  res.status(402).json("user is alredy regestered")
        }
    const salt=await bcrypt.genSalt(10)
     req.body.password= await bcrypt.hash(req.body.password,salt)
    user2=new User({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    const rse = await user2.save()
    const tokn= user2.generateToken()
    const {password,...other}=rse._doc
    res.status(201).json({...other,tokn})
})
/*
login user
*/
const loginUser=asyncHandler(async(req,res)=>{
    const {error}=validateLoginUser(req.body)
        if (error) {
           return res.status(400).json(error.details[0].message)                
        }
    const user= await User.findOne({email:req.body.email})
        if(!user){
           return  res.status(400).json("password or email is wrong ")
        }
    const isPassword=await bcrypt.compare(req.body.password,user.password)
    if(!isPassword){
        return  res.status(402).json("password or email is wrong ")
    }
    const token= user.generateToken()
    const {password,...other}=user._doc
    res.status(200).json({...other,token})
})
module.exports={regesterUser,loginUser}