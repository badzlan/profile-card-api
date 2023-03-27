import mongoose from "mongoose";
import { config } from "dotenv";

config({path: '.env'});

const connect = async () => {
   mongoose.set('strictQuery', true);
   const db = await mongoose.connect(process.env.DB_URL);
   console.log("Database Connected");
   return db;
};

export default connect;