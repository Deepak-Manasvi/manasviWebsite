import express from 'express';
import multer from 'multer';
import { applyJob, getAllApplications } from '../controllers/JobApplication.js';

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage });

// POST: User applies for a job
router.post('/apply', upload.single('resume'), applyJob);

// ✅ GET: Admin gets all job applications
router.get('/all', getAllApplications);

export default router;
