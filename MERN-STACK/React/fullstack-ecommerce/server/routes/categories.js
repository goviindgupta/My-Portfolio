const { Category } = require('../models/category')
const express = require('express')
const router = express.Router()
const pLimit = require('p-limit')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  

router.get('/',async(req,res)=>{
    const categoryList = await Category.find()

    if(!categoryList){
        res.status(500).json({success:false})
    }
    res.send(categoryList)
})

router.get('/:id',async(req,res) => {
    const category = await Category.findById(req.params.id)

    if (!category){
        res.status(500).json({ message: 'The category with the given ID was not found '})
    }
    return res.status(200).send(category)
})

router.delete('/:id',async(req,res) => {
    const deleteUser = await Category.findByIdAndDelete(req.params.id)

    if (!deleteUser){
        res.status(404).json({
            message  : "Category not found",
            success : false
        })
    }
    res.status(200).json({
        success : true,
        message : 'Category Deleted :'
    })
})


router.post('/create', async (req, res) => {
    try {
        const limit = pLimit(2);
        
        // Ensure images array exists
        if (!req.body.images || !Array.isArray(req.body.images)) {
            return res.status(400).json({ error: "Images array is required", status: false });
        }

        // Upload images with error handling
        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                try {
                    const result = await cloudinary.uploader.upload(image);
                    return result;
                } catch (uploadError) {
                    console.error("Cloudinary upload error:", uploadError);
                    throw new Error("Image upload failed");
                }
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);

        // Extract secure URLs
        const imgurl = uploadStatus.map((item) => item.secure_url);

        let category = new Category({
            name: req.body.name,
            images: imgurl,
            color: req.body.color
        });

        category = await category.save();
        res.status(201).json(category);

    } catch (error) {
        console.error("Error in /create route:", error);
        res.status(500).json({ error: error.message || "Something went wrong", status: false });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const limit = pLimit(2);

        // Ensure images array exists
        if (!req.body.images || !Array.isArray(req.body.images)) {
            return res.status(400).json({ error: "Images array is required", status: false });
        }

        // Upload images with error handling
        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                try {
                    const result = await cloudinary.uploader.upload(image);
                    return result;
                } catch (uploadError) {
                    console.error("Cloudinary upload error:", uploadError);
                    throw new Error("Image upload failed");
                }
            });
        });

        // Wait for all image uploads to complete
        const uploadStatus = await Promise.all(imagesToUpload);

        // Extract secure URLs
        const imgurl = uploadStatus.map((item) => item.secure_url);

        // Update category
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: imgurl,
                color: req.body.color
            },
            { new: true } // Return the updated document
        );

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
                success: false
            });
        }

        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            category
        });

    } catch (error) {
        console.error("Error in /PUT route:", error);
        res.status(500).json({ error: error.message || "Something went wrong", status: false });
    }
});

module.exports = router
