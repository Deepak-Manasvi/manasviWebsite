import express from 'express';
import { createTeamMember, getAllTeamMembers, updateTeamMember, deleteTeamMember } from '../controllers/teamController.js';
import multer from 'multer';

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

// Routes for team members
router.post('/create', upload.single('image'), createTeamMember);
router.get('/all', getAllTeamMembers);
router.put('/update/:id', upload.single('image'), updateTeamMember);
router.delete('/delete/:id', deleteTeamMember);

export default router;
