const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

app.use(cors())
app.options('*',cors())

// middleware
app.use(bodyParser.json())

//Routes
const categoryRoutes = require('./routes/categories')

app.use('/api/category',categoryRoutes)

// database
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Database connection is ready..')
    app.listen(process.env.PORT, () => {
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(err)
    //printing the error 
})
