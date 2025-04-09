import express from 'express';
import multer from 'multer';
import { applyJob, getAllApplications } from '../controllers/JobApplication.js';

const router = express.Router();

// Storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

router.post('/apply', upload.single('resume'), applyJob);
router.get('/applications', getAllApplications); // For admin

export default router;
