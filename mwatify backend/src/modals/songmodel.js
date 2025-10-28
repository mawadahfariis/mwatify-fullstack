import mongoose from "mongoose";

const schema=mongoose.Schema
const songschema=new schema({
     name:{type:String,required:true},
     desc:{type:String,required:true},
     album:{type:String,required:true},
     image:{type:String,required:true},
     file:{type:String,required:true},
     duration:{type:String,required:true}

})

const songModel=mongoose.models.song || mongoose.model("song",songschema)
// if exist song model use it , if not create one 

export default songModel;