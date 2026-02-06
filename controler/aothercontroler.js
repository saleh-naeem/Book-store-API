const {Aother}=require('../models/Aother')
const asyncHandler= require("express-async-handler")
const { updateBook } = require('./bookcontroler')
const joi = require('joi');
//vildeat for criting 
function createvalidate(obj){
const shcema=joi.object({
firstname:joi.string().min(3).max(10).required(),
lastname:joi.string().min(3).max(10).required(),
nasonalty:joi.string().min(3).max(10)
})
return shcema.validate(obj)
}

/*
* @desc get all aother
* @ router api/aother
* @ methode get
*/
const getAllAother=asyncHandler (async(req,res)=>{
    const{pageNumber}=req.query
        const listofaothers=await Aother.find().skip((pageNumber-1)*2).limit(2)
        res.status(200).json(listofaothers)
})
/*
* @desc get spictific aother
* @ router api/aother
* @ methode get
*/
const getAotherId=async(req,res)=>{
   try{
     const aother= await Aother.findById(req.params.id)
    if(aother){res.status(200).json(aother)}
    else res.status(404).send("the aother is not exist")
   } catch(error){console.log(error);
    res.status(500).send("there is some thing wrong")
   }
}
/*
creat Aother
*/ 
const creatAother=async(req,res)=>{
    const {error} =createvalidate(req.body)
    if(error){ return res.status(400).send(error.details[0].message)}
    try{
        const aother =new Aother({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        nasonalty:req.body.nasonalty
    })
   const rus= await aother.save()
    res.status(201).json(rus);
    }catch(error){
        console.log(error);
        res.status(500).send("there is somthing wrong")
    }
}
/*
update Aother
*/ 
const updateAother=async (req,res)=>{
   try{
    const aother= await Aother.findByIdAndUpdate(req.params.id,{
    $set:{
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        nasonalty:req.body.nasonalty
    }}
   ,{new:true})
   res.status(200).json(aother)
   }catch(error){
        console.log(error);
        res.status(500).send("there is somthing wrong")
   }
}
//delete Aother
const deleteAother=async(req,res)=>{
    try{
        const aother = await Aother.findById(req.params.id)
    if(aother){
    await Aother.findByIdAndDelete(req.params.id)
    res.status(200).send("Aother has been deleted")
    }
    else {
        res.status(402).send("Aother notfound")
    }
    }catch(error){
        console.log(error)
        res.status(500).send(" there is some thing wrong")
    }
}
module.exports={getAllAother,getAotherId,deleteAother,updateAother,creatAother}