import express from 'express'
import { testPostController } from '../controller/testController.js'
import userAuth from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.post('/test-post',userAuth,testPostController)

export default router