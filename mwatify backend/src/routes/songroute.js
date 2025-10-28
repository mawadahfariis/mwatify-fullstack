import { addsong,listsong,removesong } from "../controllers/songController.js";
import express from 'express'
import upload from "../middleware/multer.js";

const songrouter=express.Router();

songrouter.post('/add',upload.fields([{name:'image',maxCount:1},{name:'audio',maxCount:1}]),addsong);
songrouter.get('/list',listsong);
songrouter.post('/remove',removesong);

export default songrouter;