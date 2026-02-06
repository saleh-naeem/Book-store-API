const express =require('express');
const router=express.Router();
const joi = require('joi');
const {verfiytoken,verifyAndAuthorize, verfiytokenAndadmin}=require("../midelwear/token")
const {getAllusers,getUsersId,deleteUser,updateUser}=require("../controler/usercontroler")
router.get("/",verfiytokenAndadmin,getAllusers)

router.put('/:id',verfiytokenAndadmin,updateUser)
router.get("/:id",verifyAndAuthorize,getUsersId)
router.delete("/:id",verifyAndAuthorize,deleteUser)
module.exports=router;