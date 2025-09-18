import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
      alert("✅ Login successful!");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Login with Mobile 📱
        </h2>
        <p className="text-center text-gray-500 mb-6">
          An OTP will be sent for verification
        </p>

        {!isOtpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            {/* Mobile Number */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <span className="px-3 py-3 bg-gray-100 text-gray-700 flex items-center justify-center">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 focus:outline-none"
                required
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mt-1"
              />
              <p className="text-sm text-gray-600">
                By continuing, you agree to our{" "}
                <Link to="/privacy" className="text-blue-600 hover:underline">
                  privacy policies
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  T&C
                </Link>
                . You also authorize us to retrieve your credit report &amp;
                communicate with you via phone, e-mails, WhatsApp, etc.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0E8299] text-white rounded-lg font-semibold hover:bg-red-700 transition-transform transform hover:scale-105"
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#0E8299] text-white rounded-lg font-semibold hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Verify OTP & Login
            </button>
          </form>
        )}

        <p className="text-sm text-gray-600 text-center mt-5">
          Don’t have an account?{" "}
          <Link
            to="/sign-up"
            className="text-[#0E8299] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
