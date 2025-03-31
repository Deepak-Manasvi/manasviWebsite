import Contact from '../models/contactModel.js';
import nodemailer from 'nodemailer';

export const createContact = async (req, res) => {
  try {
    const { name, address, phoneNumber, email, message } = req.body;
    // Validate required fields
    if (!name || !address || !phoneNumber || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new contact instance
    const newContact = new Contact({
      name,
      address,
      phoneNumber,
      email,
      message,
    });

    // Save the contact to the database
    await newContact.save();

    // Send email with login credentials
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

    const mailOptions = {
      from: { name: "Manasvi Technologies (OPC) Pvt.", address: process.env.EMAIL_USERNAME },
      to: email,
      subject: "Your Manasvi Technologies (OPC) Pvt.",
      html: `
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Account Credentials</title>
                  <style>
                    body {
                      font-family: 'Arial', sans-serif;
                      margin: 0;
                      padding: 20px;
                      background-color: #f9fafb;
                      color: #1f2937;
                    }
                    .container {
                      max-width: 600px;
                      margin: 20px auto;
                      background-color: #ffffff;
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
                      color: #2563eb;
                      font-size: 26px;
                      margin-bottom: 20px;
                      font-weight: bold;
                      text-align: center;
                    }
                    .message {
                      text-align: center;
                      font-size: 16px;
                      color: #374151;
                      margin-bottom: 24px;
                    }
                    .credentials {
                      background: linear-gradient(135deg, #3b82f6, #1e40af);
                      border-radius: 10px;
                      padding: 20px;
                      color: #ffffff;
                      text-align: center;
                      box-shadow: 0 3px 10px rgba(30, 58, 138, 0.2);
                      margin: 24px auto;
                    }
                    .credentials p {
                      margin: 10px 0;
                      font-size: 18px;
                    }
                    .credentials b {
                      color: #dbeafe;
                    }
                    .warning {
                      background-color: #fef2f2;
                      border-left: 4px solid #dc2626;
                      padding: 16px;
                      border-radius: 8px;
                      margin-top: 20px;
                      font-size: 14px;
                      color: #b91c1c;
                    }
                    .footer {
                      text-align: center;
                      color: #6b7280;
                      font-size: 12px;
                      margin-top: 30px;
                      padding-top: 15px;
                      border-top: 1px solid #e5e7eb;
                    }
                    @media (max-width: 640px) {
                      .container {
                        padding: 20px;
                      }
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <img src="/logos/full.png" alt="Your Logo" class="logo">
                    </div>
                    <h2>Welcome to Manasvi Technologies (OPC) Pvt.</h2>
                    <p class="message">Dear ${name}, thank you for purchasing the plan.</p>
                    <div class="credentials">
                      <p><b>Email:</b> ${email}</p>
                      <p><b>Phone Number:</b> ${phoneNumber}</p>
                      <p><b>Address:</b> ${address}</p>
                      <p><b>Message:</b> ${message}</p>
                    </div>
                    <div class="footer">
                      <p>This is an automated message. Please do not reply.</p>
                      <p>&copy; ${new Date().getFullYear()} Manasvi Technologies (OPC) Pvt. All rights reserved.</p>
                    </div>
                  </div>
                </body>
                </html>
            `,
    };
    // <p class="message">Your account is currently inactive. Please wait for admin approval.</p>
    // <div class="warning">⚠️ Keep your credentials secure. Do not share them with anyone.</div>
    await transporter.sendMail(mailOptions);
    return res.status(201).json({
      message: 'Contact created successfully.',
      success: true,
      contact: newContact,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    // Fetch all contacts
    const contacts = await Contact.find();

    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phoneNumber, email, message } = req.body;

    // Check if contact exists
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Update contact fields
    contact.name = name || contact.name;
    contact.address = address || contact.address;
    contact.phoneNumber = phoneNumber || contact.phoneNumber;
    contact.email = email || contact.email;
    contact.message = message || contact.message;

    // Save updated contact to the database
    await contact.save();

    return res.status(200).json({
      message: 'Contact updated successfully.',
      success: true,
      contact: contact,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if contact exists
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    // Delete contact from database
    await Contact.findByIdAndDelete(id);

    return res.status(200).json({
      message: 'Contact deleted successfully.',
      success: true,
      contact: contact,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};
