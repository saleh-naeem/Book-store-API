const express=require('express')
const router=express.Router()
const {regesterUser,loginUser}=require("../controler/aothcontroler")

router.post('/regester',regesterUser)

router.post('/login',loginUser)

module.exports=router;