import Subscriber from '../models/Subscriber.js';
import nodemailer from 'nodemailer';

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Already subscribed' });
    }

    // Save new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Optional: Send confirmation email using nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      }
    });

    const mailOptions = {
        from: { name: "Manasvi Technologies (OPC) Pvt.", address: process.env.EMAIL_USERNAME },
        to: email,
      subject: 'Subscription Confirmation',
      text: 'Thank you for subscribing to our newsletter!'
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    console.error(err);
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
