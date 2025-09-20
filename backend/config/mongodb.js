// here we will set up  the mongo DB
// first we have to create one account on mongodb atalas
//and in that one we will get the mongodb url


import mongoose from "mongoose";
const connectDB=async()=>{
    mongoose.connection.on('connected',()=>console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/biotype`)

}
export default connectDB