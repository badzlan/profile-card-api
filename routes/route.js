import * as apiController from '../controller/apiController.js'
import { Router } from "express";
import Auth from "../middleware/auth.js"

const router = Router();

// docs
router.get("/", (req, res) => {
   res.redirect("https://documenter.getpostman.com/view/28112647/2s9XxyQsn8");
});

// auth
router.post('/register', apiController.register);
router.post('/login', apiController.login);

// user
router.get('/user', Auth, apiController.user);

// edit user
router.put('/user', Auth, apiController.edit);

export default router;