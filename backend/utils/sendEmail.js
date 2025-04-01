
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

const sendVerificationEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    text: `Your verification code is: ${code}. This code expires in 10 minutes.`
  };
  console.log(mailOptions)

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Verification email sent to", email);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

export default sendVerificationEmail;

