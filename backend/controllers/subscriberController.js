import Subscriber from '../models/Subscriber.js';

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
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
