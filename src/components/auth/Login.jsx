import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import axios from "axios";
import authImg from "./authimg.png";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    secure: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://18.208.251.169:8000/api/auth/login/", loginData);

      setMessage(res.data.message || "Success!");
    
      const access_token = res.data.access_token
      const refresh_token = res.data.refresh_token
      if (res.data.access_token && res.data.refresh_token) {
        document.cookie = `refresh_token=${refresh_token}; path=/; max-age=${
          7 * 24 * 60 * 60
        }; secure=false; samesite=strict`;
        localStorage.setItem("access_token", access_token);
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex items-center justify-center p-10 pt-15 bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className="w-full max-w-7xl flex justify-between overflow-hidden">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Welcome!</h2>
          <p className="text-gray-600 mb-6">
            Please {isLogin ? "Sign In" : "Sign Up"} to Continue
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex items-center border-zinc-300 border rounded-lg px-3 py-2 bg-pink-50">
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className="mt-3 text-sm text-center text-gray-700">{message}</p>
          )}

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
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-pink-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        {/* Right - Product Grid */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-50">
          <img src={authImg} alt="auth image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
