import {v2 as cloudenary} from 'cloudinary'
import songModel from '../modals/songmodel.js'


const addsong=async(req,res)=>{
try {
    const name=req.body.name;
    const desc=req.body.desc;
    const album=req.body.album;
    const audioFile=req.files.audio[0];
    const imageFile=req.files.image[0];

    const audioUpload=await cloudenary.uploader.upload(audioFile.path,{resource_type:"video"})
    const imageUpload=await cloudenary.uploader.upload(imageFile.path,{resource_type:"image"})

    const duration=`${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
    
    const songData={
        name,
        desc,
        album, 
        image:imageUpload.secure_url,
        file:audioUpload.secure_url,
        duration
    }

    const song=songModel(songData);
    await song.save();

    res.json({success:true,message:"song added"})
    

} catch (error) {
    res.json({success:false})

}
}
const listsong=async(req,res)=>{

    try {
        const allsongs=await songModel.find({});
        res.json({success:true,songs:allsongs})
    } catch (error) {
        res.json({success:false})
    }

}


const removesong=async(req,res)=>{
    try {
         const { id } = req.body; 
       const deleted = await songModel.findByIdAndDelete(id);
    return res.json({ success: true, message: "Song removed" });

    } catch (error) {
    return res.json({ success: false, message: error.message });
        
    }

}


export {addsong,listsong,removesong}