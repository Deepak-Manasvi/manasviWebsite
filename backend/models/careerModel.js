import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    openings: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Career = mongoose.model('Career', careerSchema);
export default Career;
