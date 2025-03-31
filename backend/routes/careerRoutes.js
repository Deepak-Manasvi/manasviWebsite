import express from 'express';
import { createCareer, createCategory, showAllCategories} from '../controllers/careerController.js';
const router = express.Router();

router.post('/createCategory', createCategory)
router.get('/showAllCategories', showAllCategories)
router.post('/createCareer', createCareer)

export default router;