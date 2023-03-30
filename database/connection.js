import mongoose from "mongoose";
import { config } from "dotenv";
config({path: '.env'});

mongoose.connect(process.env.DB_URL);
mongoose.connection.on('open', ()=>{
   console.log('Database Connected');
})