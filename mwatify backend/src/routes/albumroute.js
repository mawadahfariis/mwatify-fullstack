import express from 'express'
import { addalbum, listalbum, removealbum } from '../controllers/albumcontroller.js';
import upload from '../middleware/multer.js';

const albumrouter=express.Router();
albumrouter.post('/add',upload.single('image'),addalbum);
albumrouter.get('/list',listalbum);
albumrouter.post('/remove',removealbum)

export default albumrouter;