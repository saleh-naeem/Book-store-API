const express =require('express');
const router=express.Router();
const joi = require('joi');
const {getAllBooks,getBookId,creatBook,updateBook,deleteBook}=require("../controler/bookcontroler")
const scemah= joi.object({
name:joi.string().min(3).required(),
aother:joi.string().min(3).required(),

})

router.route("/")
.get(getAllBooks)
.post(creatBook)
router.route("/:id")
.get(getBookId)
.put(updateBook,)
.delete(deleteBook)
module.exports=router;