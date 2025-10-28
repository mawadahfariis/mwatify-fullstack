import mongoose from "mongoose";

const schema=mongoose.Schema
const albumschema=new schema({
     name:{type:String,required:true},
     desc:{type:String,required:true},
     bgColour:{type:String,required:true},
     image:{type:String,required:true}
})

const albummodel=mongoose.models.album|| mongoose.model("album",albumschema)

export default albummodel;