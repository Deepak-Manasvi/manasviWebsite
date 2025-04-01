import mongoose from 'mongoose';

const adminModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: '',
      unique: true,
    },
    mobileNumber: {
      type: String,
      default: '',
      unique: true,
    },
    otp: {
      type: String,
      default: null
    },
    otpExpires: {
      type: Date,
      default: null
    },
    profilePhoto: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: 'admin',
    },
    permissions: {
      type: [String],
      default: ['read', 'write', 'delete'],
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model('Admin', adminModel);
export default Admin;
