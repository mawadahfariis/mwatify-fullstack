import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("connection is established")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/mwatify`)
}

export default connectDB;