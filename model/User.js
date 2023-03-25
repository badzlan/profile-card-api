import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: [true, "Username is required!"],
      unique: [true, "Username exist!"]
   },
   fullname: {
      type: String,
      required: [true, "Fullname is required!"],
   },
   city: {
      type: String,
      required: [true, "City is required!"],
   },
   country: {
      type: String,
      required: [true, "Country is required!"],
   },
   job: {
      type: String,
      required: [true, "Job is required!"],
   },
   password: {
      type: String,
      required: [true, "Password is required!"],
   },
   avatar: {
      type: String,
   },
   background: {
      type: String,
   },
   about: {
      type: String,
   },
   instagram: {
      type: String,
   },
   facebook: {
      type: String,
   },
   twitter: {
      type: String,
   },
})image.png;

export default mongoose.model.Users || mongoose.model('User', userSchema);