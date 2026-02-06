const express = require('express');
const app= express();
const dotenv=require('dotenv')
const {logger}= require('./midelwear/logger')
const{errorhandler,notfound}=require("./midelwear/erorrhandler")
const connecToDb=require('./config/db')
dotenv.config()
connecToDb()
app.use(express.json())
app.use(logger)
app.use('/api/books',require('./route/books'))
app.use('/api/aother',require('./route/aother'))
app.use('/api/aoth', require('./route/aoth'))
app.use('/api/user',require('./route/users'))
app.use('/api/uplode/image',require('./route/uplode'))
app.use(errorhandler)
app.use(notfound)

const PORT=process.env.PORT;
app.listen(PORT,()=>{console.log(`server is ruing in port${PORT}`);
})