const express = require('express')
const router = new  express.Router()
const Student = require('../models/students')

router.get('/govind',(req,res) => {
    res.send('hello from the router')
})
router.post('/students', async(req,res) => {
    try{
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/students', async(req,res) => {
    try{
        const studentsData = await Student.find()
        res.status(200).send(studentsData)
    }catch(e){
        res.status(400).send(e)
    }
})
router.get('/students/:id', async(req,res)=>{
    try{
        const _id = req.params.id 
        const studentData = await Student.findById(_id)
        
        if(!studentData){
            return res.status(404).send()
        }else{
            res.status(200).send(studentData)
        }
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/students/:id',async(req,res)=> {
    try{
        const _id = req.params.id
         const UpdateStudents = await Student.findByIdAndUpdate(_id,req.body,{
            new : true
         })
         res.send(UpdateStudents)
    }catch(e){
        res.status(400).send(e) 
    }
})

router.delete('/students/:id',async(req,res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        if (!req.params.id){
           return res.status(400).send()
        }
        res.status(200).send(deleteStudent)
    }catch(e){
        res.send(500).send(e)
    }
})
module.exports = router