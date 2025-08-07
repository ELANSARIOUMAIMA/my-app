import mongoose from "mongoose";

const coachSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: [String], required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, required: false, default: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_bookes: { type: Object, default: {} },

}, { minimize: false })// we add minimize false to use the empty object of slots_bookes

const coachModel = mongoose.models.coach || mongoose.model('coach', coachSchema)
export default coachModel


