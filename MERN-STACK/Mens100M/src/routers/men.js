const express = require('express')
const router = new  express.Router()
const MensRanking = require('../models/mens')

router.post('/mens',async(req,res) =>{
    try{
        const addingMensRecord = await MensRanking(req.body)
        addingMensRecord.save()
        res.status(201).send(addingMensRecord)
    }catch(e){
        res.status(404).send(e)
    }
})

router.get('/mens', async(req,res) => {
    try{
        const getRecord = await MensRanking.find()
        res.status(200).send(getRecord)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get('/mens/:id', async(req,res) => {
    try{
        const getMensById = await MensRanking.findById(req.params.id)
        res.status(200).send(getMensById)
    }catch(e){
        res.status(500).send(e)
    }
})
router.patch('/mens/:id',async(req,res) => {
    try{
        const updateMens = await MensRanking.findByIdAndUpdate(req.params.id,req.body,{
            new : true
        })
        res.status(200).send(updateMens)
    }catch(e){
        res.status(500).send(e)
    }
})
router.delete('/mens/:id',async(req,res)=>{
    try{
        const deleteMens = await MensRanking.findByIdAndDelete(req.params.id)
        res.status(200).send(deleteMens)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router