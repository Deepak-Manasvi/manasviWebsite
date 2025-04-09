import Subscriber from '../models/Subscriber.js';

import nodemailer from 'nodemailer';

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Already subscribed' });
    }

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
        subject: "Subscription Confirmation - Manasvi Technologies",
        html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Subscription Confirmation</title>
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
          .info-box {
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 3px 10px rgba(30, 58, 138, 0.2);
            margin: 24px auto;
          }
          .info-box p {
            margin: 10px 0;
            font-size: 18px;
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
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://manasvitech.in/assets/manasvilogo-DYhVbJnJ.png" alt="Manasvi Logo" class="logo" />
          </div>
          <h2>You're Subscribed!</h2>
          <p class="message">Dear ${name || "Subscriber"}, thank you for subscribing to Manasvi Technologies.</p>
      
          <div class="info-box">
            <p><strong>Email:</strong> ${email}</p>
            ${phoneNumber ? `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` : ""}
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
          </div>
      
          <div class="message">
            <p>You’ll now be the first to know about our latest updates, tech blogs, and service offerings.</p>
          </div>
      
          <div class="footer">
            <p>This is an automated message. Please do not reply.</p>
            <p>&copy; ${new Date().getFullYear()} Manasvi Technologies (OPC) Pvt. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>`
      };
      
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const unsubscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const removed = await Subscriber.findOneAndDelete({ email });
    if (!removed) {
      return res.status(404).json({ message: 'Email not found' });
    }

    res.status(200).json({ message: 'Unsubscribed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
