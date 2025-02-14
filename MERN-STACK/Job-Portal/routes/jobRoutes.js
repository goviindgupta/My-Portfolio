import express from 'express'
import userAuth from '../middlewares/authMiddlewares.js'
import { createJobController, deleteJobController, getAllJobController, jobStatsController, updateJobController } from '../controller/jobController.js'
const router = express.Router()

router.post('/create-job',userAuth,createJobController)
router.get('/get-job',userAuth,getAllJobController)
router.patch('/update-job/:id',userAuth,updateJobController)
router.delete('/delete-job/:id',userAuth,deleteJobController)
router.get('/job-stats',userAuth,jobStatsController)

export default router