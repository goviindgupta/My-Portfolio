require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const itemsRouter = require('./routes/items')
require('./db/conn')

const app = express()
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/items',itemsRouter)

const PORT = process.env.PORT || 5010
app.listen(PORT,() => console.log(`Server running on PORT ${PORT}`))