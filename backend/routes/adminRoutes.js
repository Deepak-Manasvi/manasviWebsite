import express from 'express';
import { getAllAdmins, login, logout, register, sendOTP, verifyOTP, verifyRegisterOTP } from '../controllers/adminController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.post('/register', register);
router.post('/verify-register-otp', verifyRegisterOTP);
router.route('/login').post(login);
router.post("/sendOTP", sendOTP);
router.post("/verifyOTP", verifyOTP);
router.route('/logout').get(isAuthenticated, logout);
router.get('/all', getAllAdmins);

export default router;
