const express =require('express');
const router=express.Router();
const joi = require('joi');
const {Book}= require("../models/Book")
const asyncHandler= require("express-async-handler")
const scemah= joi.object({
name:joi.string().min(3).required(),
aother:joi.string().min(3).required(),

})
/*
get books by id
*/
router.get('/:id',asyncHandler(async (req,res)=>{
const book = await Book.findById(req.params.id)
if (book) {
    res.status(200).json(book);
}
else res.status(404).send('the id not fonud')
}))

/*
get all books
*/
router.get('/',asyncHandler(async(req,res)=>{
    const book =await Book.find();
    res.status(200).json(book)
}))
/*
creat new book
*/
router.post('/',asyncHandler(async(req,res)=>{
const {error} = scemah.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const book=await new Book({
        name:req.body.name,
        aother:req.body.aother
    }
)
const rus=book.save()
res.status(201).json(book)
}))
/*
update books
*/
router.put("/:id",asyncHandler(async(req,res)=>{
    const upbook={
        name:req.body.name,
        aother:req.body.aother
    }
const book=await Book.findByIdAndUpdate(req.params.id,{$set:{
        name:req.body.name,
        aother:req.body.aother
    }},{new:true})
  if (!book) {
    return res.status(404).send("Book not found");
  }

  res.status(200).json(book);
}))
/*
delete books
*/ 
router.delete('/:id',asyncHandler(async(req,res)=>{
const book=await Book.findByIdAndUpdate(req.params.id)
res.status(200).send("book has been deleted")

}))
module.exports=router;