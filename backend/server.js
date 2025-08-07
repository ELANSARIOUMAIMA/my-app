import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import coachRouter from './routes/coachRoute.js'
import userRouter from './routes/userRoute.js'

// app config
const app = express()
// define the port number
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/coach',coachRouter)
app.use('/api/user',userRouter)
// localhost:4000/api/admin/add-coach

app.get('/',(req,res)=>{
    res.send("API WORKING")

})

// start the express app
app.listen(port,()=>console.log("Server Started",port))