const mongooes =require("mongoose")
const bookshcema= new mongooes.Schema({
name:{
        type: String,
        minlength:3,
        maxlength:55,
        required:true,
        trim:true
        
},
aother:{
    type:mongooes.Schema.Types.ObjectId,
    required:true,
    ref:"Aother"
},
price:{
    type:Number
    
}

},{timestamps: true})
const Book=mongooes.model("Book",bookshcema)
 module.exports={Book}