import * as apiController from '../controller/apiController.js'
import { Router } from "express";
import Auth from "../middleware/auth.js"

const router = Router();

// auth
router.post('/register', apiController.register);
router.post('/login', apiController.login);

// user
router.get('/user', Auth, apiController.user);

// edit user
router.put('/user/edit', Auth, apiController.edit);

export default router;