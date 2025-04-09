import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  experience: String,
  resume: String, // file path
  coverLetter: String,
}, { timestamps: true });

export default mongoose.model('JobApplication', jobSchema);
