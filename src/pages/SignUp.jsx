import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length === 10 && isChecked) {
      setIsOtpSent(true);
      alert(`OTP sent to ${mobile}`);
    } else if (!isChecked) {
      alert("Please agree to privacy policies and T&C.");
    } else {
      alert("Enter a valid 10-digit mobile number.");
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      alert("Account created successfully!");
      navigate("/login");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-2">
          Sign Up with Mobile [Phone]
        </h2>
        <p className="text-center text-gray-500 mb-6">
          An OTP will be sent for verification
        </p>

        {!isOtpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            {/* Mobile Number */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-red-600 focus-within:border-red-600 transition">
              <span className="px-3 py-3 bg-gray-100 text-gray-700 flex items-center justify-center font-medium">
                [India] +91
              </span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 focus:outline-none text-black placeholder-gray-400"
                required
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mt-1 accent-red-600"
              />
              <p className="text-sm text-gray-600 leading-tight">
                By continuing, you agree to our{" "}
                <Link to="/privacy" className="text-red-600 hover:underline font-medium">
                  privacy policies
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-red-600 hover:underline font-medium">
                  T&C
                </Link>
                . You also authorize us to retrieve your credit report &amp;
                communicate with you via phone, e-mails, WhatsApp, etc.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Get Started
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition placeholder-gray-400 text-black"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Verify OTP & Sign Up
            </button>
          </form>
        )}

        <p className="text-sm text-gray-600 text-center mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;