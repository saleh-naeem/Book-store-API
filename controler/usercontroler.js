const {User,validateUpdateUser}=require("../models/User")
const bcrypt=require('bcrypt')
const asyncHandler= require("express-async-handler")

/*
update users
*/
const updateUser=asyncHandler(async(req,res)=>{
const{error}=await validateUpdateUser(req.body)
if (error) {
    return res.status(400).json(error.details[0].message)
}
const check =User.findById(req.params.id)
if(!check){
    return res.status(404).json("the user desnt exsist")
}
if(req.body.password){
    const salt=await bcrypt.genSalt(10)
    req.body.password=await bcrypt.hash(req.body.password,salt)
}
const user= await User.findByIdAndUpdate(req.params.id,{$set:{
    email:req.body.email,
    username:req.body.username,
    password:req.body.password
}},{new:true}).select("-password")
res.status(200).json(user)
})
/*
get all user only admin can
*/
const getAllusers=asyncHandler(async(req,res)=>{
    const user = await User.find().select("-password")
    res.status(200).json(user)
})
/*
get user by id
*/
const getUsersId=asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password")
   if(user) {res.status(200).json(user)}
    else {res.status(404).json("not found")}
})

/*
delete user
*/
const deleteUser=asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password")
   if(user) {
    await User.findByIdAndUpdate(req.params.id)
    res.status(200).json("user has been deleted")}
    else {res.status(404).json("not found")}
})
module.exports={getAllusers,getUsersId,deleteUser,updateUser}