import {v2 as cloudenary} from 'cloudinary'
import albummodel from '../modals/albummodel.js'

const addalbum =async(req,res)=>{
try {
    const name=req.body.name;
    const desc=req.body.desc;
    const bgColour=req.body.bgColour;
    const imageFile=req.file;
    const imageUpload=await cloudenary.uploader.upload(imageFile.path,{resource_type:"image"});

    const albumData={
        name,
        desc,
        bgColour,
        image:imageUpload.secure_url
    }

    const album=albummodel(albumData)
    await album.save();

    res.json({success:true,message:"album added"})
} catch (error) {
     res.json({success:false})
}
}

const listalbum =async(req,res)=>{
try {
    const allalbum=await albummodel.find({});
    res.json({success:true,albums:allalbum})
} catch (error) {
     res.json({success:false})
}
}

const removealbum =async(req,res)=>{
try {
    const {id}=req.body;
    await albummodel.findByIdAndDelete(id);
    res.send({success:true,message:"album deleted"})
    
} catch (error) {
     res.json({success:false})
}
}

export{addalbum,listalbum,removealbum}