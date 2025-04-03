import Admin from '../models/adminModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from "nodemailer";

// export const register = async (req, res) => {
//     try {
//         const { name, password, email, mobileNumber } = req.body;
//         if (!name || !password || !mobileNumber || !email) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         const existingAdmin = await Admin.findOne({ email });
//         if (existingAdmin) {
//             return res.status(400).json({ message: 'Admin already exists. Try a different email.' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const profilePhoto = `https://avatar.iran.liara.run/public/boy?email=${email}`;

//         const newAdmin = new Admin({
//             name,
//             email,
//             password: hashedPassword,
//             mobileNumber,
//             profilePhoto,
//         });

//         await newAdmin.save();

//         return res.status(201).json({
//             message: 'Account created successfully.',
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Server error', error: error.message });
//     }
// };

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

        // Generate OTP
        const otp = generateOTP();
        const otpExpiration = new Date(Date.now() + 10 * 60 * 1000);

        // Store OTP in a temporary collection or within the Admin schema
        await Admin.updateOne(
            { email }, 
            { otp, otpExpires: otpExpiration }, 
            { upsert: true } // If admin does not exist, create a new entry with OTP
        );

        // Send OTP to email
        await sendOtpEmail(email, otp);

        return res.status(200).json({
            message: 'OTP sent to email. Verify OTP to complete registration.',
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const verifyRegisterOTP = async (req, res) => {
    try {
        let { name, password, email, mobileNumber, otp } = req.body;
        if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });

        email = email.trim().toLowerCase(); // Normalize email

        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(400).json({ message: "Invalid credentials" });

        if (!admin.otp || admin.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        if (new Date() > admin.otpExpires) {
            return res.status(400).json({ message: "OTP expired" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePhoto = `https://avatar.iran.liara.run/public/boy?email=${email}`;

        // Create admin account
        admin.name = name;
        admin.password = hashedPassword;
        admin.mobileNumber = mobileNumber;
        admin.profilePhoto = profilePhoto;
        admin.otp = null;
        admin.otpExpires = null;
        await admin.save();

        return res.status(201).json({
            message: 'Account created successfully.',
            success: true,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const resendRegisterOTP = async (req, res) => {
    let { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    email = email.trim().toLowerCase();

    try {
        const existingUser = await Admin.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "Admin not registered" });
        }

        // Generate new OTP
        const otp = generateOTP();
        const otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
        existingUser.otp = otp;
        existingUser.otpExpires = otpExpiration;
        await existingUser.save();

        await sendOtpEmail(email, otp);

        res.json({ message: "OTP resent to email", success: true });
    } catch (error) {
        console.error("OTP Error:", error);
        res.status(500).json({ message: "Error sending OTP", success: false });
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

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOtpEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const htmlTemplate = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 20px;
      color: black;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 40px;
    }
    .header {
      text-align: center;
      margin-bottom: 32px;
    }
    .logo {
      max-width: 180px;
      height: auto;
    }
    h2 {
      font-size: 26px;
      margin-bottom: 20px;
      font-weight: bold;
      text-align: center;
    }
    .message {
      text-align: center;
      font-size: 16px;
      margin-bottom: 24px;
    }
    .otp-container {
      border-radius: 10px;
      padding: 25px;
      text-align: center;
      font-family: 'Courier New', monospace;
      box-shadow: 0 3px 10px rgba(30, 58, 138, 0.2);
      margin: 24px auto;
      width: fit-content;
    }
    .otp-code {
      font-size: 36px;
      font-weight: bold;
      letter-spacing: 2px;
      margin: 0;
    }
    .otp-expiry {
      font-size: 14px;
      margin-top: 10px;
    }
    .warning {
      border-left: 4px solid red;
      padding: 16px;
      border-radius: 8px;
      margin-top: 20px;
      font-size: 14px;
      color: red;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid #e5e7eb;
    }
    @media (max-width: 640px) {
      .container {
        padding: 20px;
      }
      .otp-code {
        font-size: 28px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://manasvitech.in/assets/manasvilogo-DYhVbJnJ.png" alt="Your Logo" class="logo">
    </div>
    <h2>Verify Your Identity</h2>
    <p class="message">Use the OTP below to complete your verification. This code is valid for a limited time.</p>
    <div class="otp-container">
      <p class="otp-code">${otp}</p>
      <p class="otp-expiry">⏳ This code expires in 10 minutes</p>
    </div>
    <p class="message">If you did not request this OTP, please ignore this email or contact support.</p>
    <div class="warning">⚠️ Never share your OTP with anyone. We will never ask for it.</div>
    <div class="footer">
      <p>This is an automated message. Please do not reply.</p>
      <p>&copy; ${new Date().getFullYear()} Manasvi Technologies (OPC) Pvt. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: "Your Manasvi Technologies (OPC) Pvt Verification Code",
        html: htmlTemplate,
        text: `Your Manasvi Technologies (OPC) Pvt verification OTP is: ${otp}\n\nThis code will expire in 10 minutes.\n\nIf you didn't request this OTP, please ignore this email or contact our support team.`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.error("Error sending OTP via email:", error.message || error);
        throw new Error("Unable to send OTP via email.");
    }
};

export const sendOTP = async (req, res) => {
    let { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    email = email.trim().toLowerCase();

    try {
        const existingUser = await Admin.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: "Admin not registered" });
        }

        // Generate OTP
        const otp = generateOTP();
        const otpExpiration = new Date(Date.now() + 10 * 60 * 1000);
        existingUser.otp = otp;
        existingUser.otpExpires = otpExpiration;
        await existingUser.save();

        await sendOtpEmail(email, otp);

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
        console.log(!admin.otp || admin.otp !== otp)
        if (!admin.otp || admin.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        if (new Date() > admin.otpExpires) {
            return res.status(400).json({ message: "OTP expired" });
        }
            admin.otp = null;
            admin.otpExpires = null;
            await admin.save();

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
                success: "true",
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
            res.status(500).json({ success: false, message: error.message });
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
