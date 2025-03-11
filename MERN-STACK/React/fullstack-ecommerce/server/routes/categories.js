const { Category } = require('../models/category')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>{
    const categoryList = await Category.find()

    if(!categoryList){
        res.status(500).json({success:false})
    }
    res.send(categoryList)
})

router.post('/create', async (req,res) => {
    const limit = pLimit(2)

    const imagesToUpload = req.body.images.map((image) => {
        return limit (async () => {
            const result = await cloudinary.uploader.upload(image)
            return result
        })
    })
    const uploadStatus = await Promise.all(imagesToUpload)
})

module.exports = router
