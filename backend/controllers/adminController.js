import Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
            userId: admin._id,
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
        const admins = await Admin.find().select('-password'); // Excluding the password field
        res.status(200).json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
