import express from 'express'
import upload from '../middlewares/multer.js'
import { addCoach, allCoaches, loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailablity } from '../controllers/coachController.js'



const adminRouter = express.Router()


adminRouter.post('/add-coach', authAdmin, upload.single('image'), addCoach)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-coaches',authAdmin, allCoaches)
adminRouter.post('/change-availability',authAdmin,changeAvailablity)


export default adminRouter