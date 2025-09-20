import { request } from "express"
import validator from "validator"
import bycrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import coachModel from "../models/coachModel.js"
import jwt from 'jsonwebtoken'






// API for adding coach
const addCoach = async (req, res) => {
    try {
        const { name, email, password, category, type, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // checking for all data to add coach
        if (!name || !email || !password || !category || !type || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }




        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }


        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }
        // hashing coach password
        const salt = await bycrypt.genSalt(10)//we can provide thenumber between 5 to 15
        //if  you provide ther larger number it will take moretime to encrypt the password
        const hashedPassword = await bycrypt.hash(password, salt)


        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url
        const types = JSON.parse(req.body.type)


        const coachData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            category,
            type: types,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()


        }
        const newCoach = new coachModel(coachData)
        // to save the data in database
        await newCoach.save()
        res.json({ success: true, message: "Coach Added" })
    }








    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// API For admin Login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    }


    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })


    }
}




// Api to get all coches list for admin panel
const allCoaches = async (req, res) => {
    try {
        const coaches = await coachModel.find({}).select('-password')
        res.json({ success: true, coaches })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })


    }


}








export { addCoach, loginAdmin, allCoaches }

