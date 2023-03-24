import * as appControlller from '../controller/appController.js'
import { Router } from "express";
const router = Router();

// auth
router.post('/login', appControlller.login);
router.post('/register', appControlller.register);

// user
router.get('/user/:username', appControlller.user);

// edit user
router.put('/edit', appControlller.edit);

export default router;