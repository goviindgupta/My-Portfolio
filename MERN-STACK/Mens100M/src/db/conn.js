 const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/olymics').then(() => {
    console.log('connection successfull')
 }).catch(()=>{
    console.log('connection failed')
 })