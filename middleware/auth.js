import jwt from "jsonwebtoken";
import { config } from "dotenv";
import User from "../model/User.js";

config({ path: ".env" });

/** auth middleware */
const Auth = async (req, res, next) => {
   try {
      const token = req.headers.authorization.split(" ")[1];
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      next();
   } catch (error) {
      res.status(401).json({ error: "Authorization Failed!" });
   }
};

export default Auth;
