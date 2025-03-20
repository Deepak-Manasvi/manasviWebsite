import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    serialNumber: {
      type: Number,
      unique: true,
      required: true,
      default: 0 
    },
    serviceName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model('Service', serviceSchema);
export default Service;
