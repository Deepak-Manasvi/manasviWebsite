import express from 'express';
import { getAllAdmins, login, logout, register } from '../controllers/adminController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.post('/register', register);
router.route('/login').post(login);
router.route('/logout').get(isAuthenticated, logout);
router.get('/all', getAllAdmins);

export default router;
