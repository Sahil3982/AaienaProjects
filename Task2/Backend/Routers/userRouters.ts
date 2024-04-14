import express from 'express';
import { registerUser } from '../Controllers/userController';

const router = express.Router();

router.post('/register', registerUser);

export default router;