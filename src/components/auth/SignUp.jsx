import React, { useState } from "react";
import { Mail, Lock, Phone, PenTool } from "lucide-react";
import axios from "axios";
import authImg from "./authimg.png";
import { verifyEmail } from "../../services/verfiyEmail";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [signupData, setSignupData] = useState({
    email: "",
    full_name: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (isSignUp && signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://18.208.251.169:8000/api/auth/signup/",
        {
          email: signupData.email,
          contact: signupData.contact,
          password: signupData.password,
        }
      );
      setSuccess(response.data.detail);
      const responseUrl = response.data["token (STRICTLY for dev env)"];
      const token = new URL(responseUrl).searchParams.get("token");

      if (token) {
        const result = await verifyEmail(token);
        const refresh_token = result.data.refresh_token;
        const access_token = result.data.access_token;

        document.cookie = `refresh_token=${refresh_token}; path=/; max-age=${
          7 * 24 * 60 * 60
        }; secure=false; samesite=strict`;
        localStorage.setItem("access_token", access_token);

      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
    setSignupData({
      email: "",
      full_name: "",
      contact: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex items-center justify-center p-10 pt-15 bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className="w-full max-w-7xl flex justify-between overflow-hidden">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Welcome!</h2>
          <p className="text-gray-600 mb-6">
            Please {isSignUp ? "Sign Up" : "Sign In"} to Continue
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex items-center border-zinc-300 border rounded-lg px-3 py-2 bg-pink-50">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-transparent outline-none flex-1"
                value={signupData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* fullname */}
            <div className="flex items-center border-zinc-300 border  rounded-lg px-3 py-2 bg-pink-50">
              <PenTool className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                name="full_name"
                placeholder="full name"
                className="bg-transparent outline-none flex-1"
                value={signupData.full_name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact Number */}
            <div className="flex items-center border-zinc-300 border rounded-lg px-3 py-2 bg-pink-50">
              <Phone className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                className="bg-transparent outline-none flex-1"
                value={signupData.contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center border-zinc-300 border rounded-lg px-3 py-2 bg-pink-50">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-1"
                value={signupData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password (only for SignUp) */}
            {isSignUp && (
              <div className="flex items-center border-zinc-300 border rounded-lg px-3 py-2 bg-pink-50">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="bg-transparent outline-none flex-1"
                  value={signupData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Error or Success Messages */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Switch Auth Mode */}
          <p className="mt-4 text-sm text-gray-600">
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-pink-600 font-semibold hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Right - Image */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-50">
          <img src={authImg} alt="auth image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
