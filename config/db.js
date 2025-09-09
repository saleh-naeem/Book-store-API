const mongoose= require('mongoose')


async function connecToDb(){
try{   
   await  mongoose.connect(process.env.MONGO_URL)
     console.log("contected to mongodb...")
}

catch(error){
    console.log(`connction faild!${error}`)
}
}
module.exports=connecToDb