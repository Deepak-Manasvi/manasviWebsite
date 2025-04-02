import nodemailer from "nodemailer";

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

const sendVerificationEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Verify Your Email",
    text: `Your verification code is: ${code}. This code expires in 10 minutes.`
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Verification email sent to", email);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

export default sendVerificationEmail;

