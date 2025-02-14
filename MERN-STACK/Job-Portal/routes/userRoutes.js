import express from 'express'
import userAuth from '../middlewares/authMiddlewares.js'
import { updateUserController } from '../controller/userController.js'

const router = express.Router()

router.put('/update-user',userAuth,updateUserController)


export default router