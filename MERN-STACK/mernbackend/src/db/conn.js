const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/RegistrationForm').then(() => {
    console.log('connection to mongo db success..')
}).catch((e)=> {
    console.log('connection to mongo db failed...')
})