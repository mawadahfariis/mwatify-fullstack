//will extract the file from the api req and it'll provide its path


import multer from "multer";

const storage=multer.diskStorage({
    filename:function(req,file,callback){
          callback(null,file.originalname)
    }
})

const upload=multer({storage});

export default upload;