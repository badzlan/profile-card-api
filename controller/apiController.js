import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import env from "../env.js";

const createToken = (_id) => {
   return jwt.sign({ _id }, env.JWT_SECRET);
};

const register = async (req, res) => {
   const { username, fullname, city, country, job, password } = req.body;

   try {
      const exist = await User.findOne({ username });
      if (exist) {
         throw Error("Username Exist!");
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      await User.create({ username, fullname, city, country, job, password: hash 
      });

      res.status(201).send({ msg: "Register Successfully" });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

const login = async (req, res) => {
   const { username, password } = req.body;y

   try {
      const user = await User.findOne({ username });
      if (!user) {
         throw Error("Incorrect Username");
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
         throw Error("Incorrect Password");
      }

      const token = createToken(user._id);
      res.status(201).send({ msg: "Login Successfully", username, token });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

const user = async (req, res) => {
   const { username } = req.params;

   try {
      const user = await User.findOne({ username });
      if (user) {
         const { password, ...data } = Object.assign({}, user.toJSON());
         res.status(201).send({ data });
      }
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

const edit = async (req, res) => {
   const { username } = req.params;
   try {
      User.updateOne({username}, req.body)
         .then(res.json({ msg: "Updated Succesfully"}))
         .catch((error) => res.status(404).json({ error: error.message }));
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

export { login, register, user, edit };
