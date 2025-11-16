import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../lib/store/auth/authThunks";
import authImg from "./authimg.png";

// Dummy Toast Hook for demonstration (Replace with actual library like react-hot-toast)
const useToast = () => {
  const success = (message) => console.log(`Toast SUCCESS: ${message}`);
  const error = (message) => console.error(`Toast ERROR: ${message}`);
  return { success, error };
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast(); // Initialize toast

  const { loading, tokens, isEmailVerified, error } = useSelector((state) => state.auth);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  // 1. Redirect after successful login
  React.useEffect(() => {
    // Only redirect if a token is present AND the email is verified
    if (tokens.access && isEmailVerified) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [tokens, isEmailVerified, navigate]);

  // 2. Show toast if email is NOT verified but login was otherwise successful (token exists)
  React.useEffect(() => {
    if (tokens.access && !isEmailVerified) {
      toast.error("Email not verified. Please check your inbox!");
      // Optional: Clear the token here if you want to prevent the user from being 'logged in' until verification.
      // E.g., dispatch(logout()); // If you have a policy to log out unverified users
    }
  }, [tokens.access, isEmailVerified, toast]);

  return (
    <div className="flex items-center justify-center p-10 bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className="w-full max-w-7xl flex justify-between overflow-hidden shadow-lg rounded-2xl bg-white">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-600 mb-6">Please Sign In to Continue</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-transparent outline-none flex-1"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Password"
                className="bg-transparent outline-none flex-1"
                required
              />
            </div>

            {/* Messages */}
            {/* Display Redux error if one exists */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Please wait..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* 👇 Signup Redirect Text */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-pink-500 font-semibold hover:underline"
            >
              Click here to Sign up
            </Link>
          </p>
        </div>

        {/* Right - Image */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100 w-1/2">
          <img
            src={authImg}
            alt="Authentication"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;