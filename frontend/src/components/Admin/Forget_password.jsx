import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import backgroundImage from "../../assets/Images/Footer.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEmailSent(true)
  };

  return (
    <div className="flex h-screen justify-center items-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {
        <div className="max-w-[500px] p-4 lg:p-8 font-inter ">
          <h1 className="text-white font-semibold text-3xl mb-6 ">
            {!emailSent ? "Reset your Password" : "Check your email"}
          </h1>
          <p className="text-white  font-normal text-base w-[75%] my-4">
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password.you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label>
                <p className="text-white font-normal text-base mb-1">
                  Email Address<sup className="text-red-800">*</sup>
                </p>
                <input
                  placeholder="Enter your Email Address"
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg bg-gray-300 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full mb-6"
                />
              </label>
            )}
            <button
              type="submit"
              className="bg-yellow-300 cursor-pointer  text-gray-900  font-medium text-base p-2 rounded-md  w-full mb-6"
            >
              {!emailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>

          <div className="text-white mr-52">
            <Link to="/">
              <p className=" font-medium text-base flex  gap-2 items-center">
                <BsArrowLeft />
                Back to login
              </p>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default ForgotPassword;
