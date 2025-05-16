const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{}).then(() => {
    console.log('Connection is Successfull :)')
}).catch((e) => {
    console.log('Failed to Connect to DB')
})