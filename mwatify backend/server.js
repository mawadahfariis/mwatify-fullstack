import express from 'express'
import cors from 'cors'
import 'dotenv/config' //to get the emviroment variable in our backend
import songrouter from './src/routes/songroute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinaty from './src/config/cloudenary.js';
import albumrouter from './src/routes/albumroute.js';

//app config
const app=express();
connectDB();
connectCloudinaty();


//middlewares
app.use(express.json()) //whenever we'll get any request it will be pass first in this method
app.use(cors()); //allow connect front with back

//init routes
app.get('/',(req,res)=>res.send("api working"))
app.use("/api/song",songrouter)
app.use("/api/album",albumrouter)


const port=process.env.PORT || 4000;
app.listen(port,()=>console.log(`server started on ${port}`))