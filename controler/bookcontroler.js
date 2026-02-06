const { model } = require("mongoose");
const {Book}= require("../models/Book")
const asyncHandler= require("express-async-handler")
/*
get books by id
*/
const getBookId=asyncHandler(async (req,res)=>{
const book = await Book.findById(req.params.id)
if (book) {
    res.status(200).json(book);
}
else res.status(404).send('the id not fonud')
})
/*
get all books
*/
const getAllBooks=asyncHandler(async(req,res)=>{
    const book =await Book.find()
    .populate("aother",[
        "_id",
        "firstname",
        "lastname"
    ]
    )
    res.status(200).json(book)
})
/*
creat new book
*/
const creatBook=asyncHandler(async(req,res)=>{
const {error} = scemah.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const book=await new Book({
        name:req.body.name,
        aother:req.body.aother
    }
)
const rus=book.save()
res.status(201).json(book)
})
/*
update books
*/
const updateBook=asyncHandler(async(req,res)=>{
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
})
/*
delete books
*/ 
const deleteBook=asyncHandler(async(req,res)=>{
const book=await Book.findByIdAndUpdate(req.params.id)
res.status(200).send("book has been deleted")

})
module.exports={getAllBooks,getBookId,creatBook,updateBook,deleteBook}