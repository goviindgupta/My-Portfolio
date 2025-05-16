const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

//Get all
router.get('/',async(req,res)=> {
    try{
        const items = await Item.find()
        res.status(200).json(items)
    }
    catch(e){
        res.status(400).json(e)
    }
})

//Get one
router.get('/:id',async(req,res) => {
    try{
        const _id = req.params.id 
        const items = await Item.findById(_id)
        res.status(200).json(items)
    }
    catch(e){
        res.status(400).json(e)
    }
})

//Post
router.post('/',async (req,res) => {
    try{
        const items = new Item(req.body)
        const createdItem = await items.save()
        res.status(201).json(createdItem)
    }
    catch(e){
        res.status(400).json(e)
    }
})

//PUT
router.put('/:id',async(req,res) => {
    try{
        const _id = req.params.id 
        const updated = await Item.findByIdAndUpdate(_id,req.body,{
            new : true
        })
        res.status(200).json(updated)
    }
    catch(e)
    {
        res.status(400).json(e)
    }
})

// Delete
router.delete('/:id',async(req,res) => {
    try{
        const _id = req.params.id 
        const deletedItem = await Item.findByIdAndDelete(_id)
        res.status(200).json(deletedItem)
    }
    catch(e){
        res.status(400).json(e)
    }
})

module.exports = router