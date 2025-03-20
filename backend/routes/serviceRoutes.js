import express from 'express';
import { createService, getAllServices, updateService, deleteService } from '../controllers/serviceController.js';

const router = express.Router();

// Routes for services
router.post('/create', createService);
router.get('/all', getAllServices);
router.put('/update/:id', updateService);
router.delete('/delete/:id', deleteService);

export default router;
