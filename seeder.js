const mongooes=require('mongoose');
const connecToDb=require("./config/db");
require("dotenv").config();
const {Book}=require('./models/Book')
const {books,authors}=require("./data")
const {Aother}=require('./models/Aother')
connecToDb();
importdata=async ()=>{
    try{
await Book.insertMany(books)
console.log("books has been inserted")
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
//import aother
importaother=async ()=>{
    try{
await Aother.insertMany(authors)
console.log("aothers has been inserted")
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
//remove books
removedata= async ()=>{
    try{
await Book.deleteMany()
console.log("books has been rmoved")
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
if (process.argv[2]==="-import") {
    importdata();
}else if(process.argv[2]==="-remove"){
    removedata();
}else if(process.argv[2]==="-import-aother"){
    importaother();
}