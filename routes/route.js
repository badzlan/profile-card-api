import * as apiController from '../controller/apiController.js'
import { Router } from "express";
const router = Router();

// auth
router.post('/register', apiController.register);
router.post('/login', apiController.login);

// user
router.get('/user/:username', apiController.user);

// edit user
router.put('/edit', apiController.edit);

export default router;