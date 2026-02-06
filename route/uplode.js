const express =require('express');
const router=express.Router();

const { date } = require("joi")
const multer=require('multer')
const path= require("path")
const storage=multer.diskStorage({
    destination:function(req,file,cb){
cb(null,path.join(__dirname,"../image"))
},
filename: function(req,file,cb){
    cb(null,new Date().toISOString().replace(/:/g,"-"))
}})

const uplod=multer({storage:storage})
  
router.post('/',uplod.single("image"),(req,res)=>{
        res.status(201).json("image has been uploded")})
module.exports= router