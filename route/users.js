const express =require('express');
const router=express.Router();
const joi = require('joi');
const {User,validateUpdateUser}=require("../models/User")
const bcrypt=require('bcrypt')
const asyncHandler= require("express-async-handler")
const {verfiytoken,verifyAndAuthorize, verfiytokenAndadmin}=require("../midelwear/token")
/*
update users
*/
router.put('/:id',verfiytokenAndadmin,asyncHandler(async(req,res)=>{
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
}))
/*
get all user only admin can
*/
router.get("/",verfiytokenAndadmin,asyncHandler(async(req,res)=>{
    const user = await User.find().select("-password")
    res.status(200).json(user)
}))
/*
get user by id
*/
router.get("/:id",verifyAndAuthorize,asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password")
   if(user) {res.status(200).json(user)}
    else {res.status(404).json("not found")}
}))
/*
delete user
*/
router.delete("/:id",verifyAndAuthorize,asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password")
   if(user) {
    await User.findByIdAndUpdate(req.params.id)
    res.status(200).json("user has been deleted")}
    else {res.status(404).json("not found")}
}))
module.exports=router;