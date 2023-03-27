import jwt from "jsonwebtoken";
import env from "../env.js";

/** auth middleware */
const Auth = async (req, res, next) => {
   try {
      const token = req.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(token, env.JWT_SECRET);

      req.user = decodedToken;

      next();
   } catch (error) {

      res.status(401).json({ error: "Authorization Failed!" });
   }
}

export default Auth;
