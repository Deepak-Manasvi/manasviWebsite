import JobApplication from '../models/JobApplication.js';

export const applyJob = async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter } = req.body;
    // console.log(req.body)
    const resume = req.file?.path;
    // console.log("resume via vishal", resume)

    const newApp = new JobApplication({
      name,
      email,
      phone,
      experience,
      resume,
      coverLetter
    });

    await newApp.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
// Fetch all job applications (for admin)
export const getAllApplications = async (req, res) => {
    try {
      const applications = await JobApplication.find().sort({ createdAt: -1 });
      res.status(200).json(applications);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  