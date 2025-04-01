import Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendVerificationEmail from "../utils/sendEmail.js";
import generateCode from "../utils/generateCode.js";

export const register = async (req, res) => {
    try {
        const { name, password, email, mobileNumber } = req.body;
        if (!name || !password || !mobileNumber || !email) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists. Try a different email.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePhoto = `https://avatar.iran.liara.run/public/boy?email=${email}`;

        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword,
            mobileNumber,
            profilePhoto,
        });

        await newAdmin.save();

        return res.status(201).json({
            message: 'Account created successfully.',
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({
                message: 'Incorrect email or password',
                success: false,
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, admin.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: 'Incorrect email or password',
                success: false,
            });
        }

        const tokenData = {
            adminId: admin._id,
        };

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
            expiresIn: '1d',
        });
        const options = {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',
        };
        return res.status(200).cookie('token', token, options).json({
            _id: admin._id,
            token: token,
            email: admin.email,
            name: admin.name,
            mobileNumber: admin.mobileNumber,
            profilePhoto: admin.profilePhoto,
            role: admin.role,
            permissions: admin.permissions,
        });
    } catch (error) {
        console.log(error);
    }
};
export const sendOTP = async (req, res) => {
    let { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    email = email.trim().toLowerCase(); // Normalize email

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(404).json({ message: "Admin not registered" });
        }

        const otp = generateCode();
        const expiryTime = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

        // Update OTP in the database
        admin.otp = otp;
        admin.otpExpires = expiryTime;
        console.log(admin.otp, admin.otpExpires);

        await admin.save(); // ✅ Corrected this line

        // Send OTP via email
        await sendVerificationEmail(email, otp);
        res.json({ message: "OTP sent to email", success: true });
    } catch (error) {
        console.error("OTP Error:", error);
        res.status(500).json({ message: "Error sending OTP", success: false });
    }
};

  
  // ✅ Verify OTP & Login
  export const verifyOTP = async (req, res) => {
    let { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });
  
    email = email.trim().toLowerCase(); // Normalize email
  
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) return res.status(400).json({ message: "Invalid credentials" });
      if (!admin.otp || admin.otp !== otp) {
          return res.status(400).json({ message: "Invalid OTP" });
         
        }
        
        if (new Date() > admin.otpExpires) {
            return res.status(400).json({ message: "OTP expired" });
        }
       
  
      // Clear OTP after successful login
      admin.otp = null;
      admin.otpExpires = null;
      await admin.save();
  
      // Generate JWT token
  
      const tokenData = {
        adminId: admin._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d',
    });
    const options = {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
    };
    return res.status(200).cookie('token', token, options).json({
        success:"true",
        _id: admin._id,
        token: token,
        email: admin.email,
        name: admin.name,
        mobileNumber: admin.mobileNumber,
        profilePhoto: admin.profilePhoto,
        role: admin.role,
        permissions: admin.permissions,
    });
    } catch (error) {
      console.error("OTP Verification Error:", error);
      res.status(500).json({ message: "Error verifying OTP" });
    }
  };

export const logout = (req, res) => {
    try {
        return res.status(200).cookie('token', '', { maxAge: 0 }).json({
            message: 'Logged out successfully.',
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().select('-password'); 
        res.status(200).json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
