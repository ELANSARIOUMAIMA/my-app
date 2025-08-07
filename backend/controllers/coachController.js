import coachModel from "../models/coachModel.js"



const changeAvailablity=async(req,res)=>{
    try {
        const {coId}=req.body
        const coData =await coachModel.findById(coId)
        await coachModel.findByIdAndUpdate(coId,{available: !coData.available})
        res.json({success:true,message:'Availablity Changed'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }


} 

const coachList=async(req,res)=>{
    try {
        const coaches=await coachModel.find({}).select(['-password','-email'])
        res.json({success:true,coaches})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})

        
    }
}
export  {changeAvailablity,coachList}