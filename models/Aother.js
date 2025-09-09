const mongoose = require("mongoose");
const Aoutherscema= new mongoose.Schema({
    firstname:{
type: String,
        minlength:3,
        maxlength:55,
        required:true,
        trim:true
        
    },

      lastname:{
        type:String,
        minlength:3,
        maxlength:55,
        required:true,
        trim:true
        
    },
      nasonalty:{
        type:String,
        minlength:3,
        maxlength:55,
        required:true,
        trim:true
        
    }
},{
    timestamps:true
});
const Aother = mongoose.model("Aother",Aoutherscema)
module.exports={
    Aother
}