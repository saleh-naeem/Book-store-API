const joi = require("joi")
const mongooes =require("mongoose")
const jwt= require('jsonwebtoken')
const usershcema= new mongooes.Schema({
email:{
    type:String,    
    required:true,
    minlength:10,
    maxlength:200,
    unique:true,
    trim:true
},
username:{
    type:String,
    required:true,
    minlength:10,
    maxlength:200,
    unique:true,
    trim:true
},
password:{
    type:String,
    required:true,
    minlength:10,
    maxlength:200,
    trim:true
},
isAdmean:{
    type:Boolean,
    default:false
}
})
usershcema.methods.generateToken=function(){
return  jwt.sign({id:this._id,isAdmean:this.isAdmean},process.env.jwt_secrt_key)
}
const User=mongooes.model('User',usershcema)
function validateRigisterUser(obj){
    const schema=joi.object({
        email:joi.string().required().max(200).min(10).trim().email(),
        username:joi.string().required().max(200).min(10).trim(),
        password:joi.string().required().max(200).min(10).trim(),
        })
        return schema.validate(obj)
}
function validateLoginUser(obj){
    const schema=joi.object({
        email:joi.string().required().max(200).min(6).trim().email(),
        password:joi.string().required().max(200).min(6).trim(),
        })
        return schema.validate(obj)
}
function validateUpdateUser(obj){
    const schema=joi.object({
        email:joi.string().max(200).min(20).trim().email(),
        username:joi.string().max(200).min(10).trim(),
        password:joi.string().max(200).min(10).trim(),
        })
        return schema.validate(obj)
}
module.exports={User,validateLoginUser,validateRigisterUser,validateUpdateUser}