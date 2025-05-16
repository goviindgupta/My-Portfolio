const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        default : 1
    },
},{timestamps:true})

const Item = new mongoose.model('Item',ItemSchema)

module.exports = Item