import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import authImg from './authimg.png'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center p-10 pt-15 bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className=" w-full max-w-7x  flex justify-between overflow-hidden">
        
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">
            Welcome!
          </h2>
          <p className="text-gray-600 mb-6">
            Please {isLogin ? "Sign In" : "Sign Up"} to Continue
          </p>

          <form className="space-y-4">
            {/* Email */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none flex-1"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90"
            >
              {isLogin ? "Sign In" : "Sign Up"}
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
            {isLogin ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-pink-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Right - Product Grid */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-50">
         <img
          src={authImg}
          alt="auth image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
