import mongoose from "mongoose";
import env from "../env.js";

const connect = async () => {
   mongoose.set('strictQuery', true);
   const db = await mongoose.connect(env.DB_URL);
   console.log("Database Connected");
   return db;
};

export default connect;