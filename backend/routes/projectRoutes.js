import express from 'express';
import { createProject, getAllProjects, updateProject, deleteProject } from '../controllers/projectController.js';
import multer from 'multer';

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Routes for projects
router.post('/create', upload.single('image'), createProject);
router.get('/all', getAllProjects);
router.put('/update/:id', upload.single('image'), updateProject);
router.delete('/delete/:id', deleteProject);

export default router;
