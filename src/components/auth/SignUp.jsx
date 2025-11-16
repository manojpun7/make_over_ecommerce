import React, { useState, useEffect } from "react";
import { Mail, Lock, Phone, PenTool } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../lib/store/auth/authThunks";
import { Link, useNavigate } from "react-router-dom";
import authImg from "./authimg.png";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success, isEmailVerified } = useSelector(
    (state) => state.auth
  );

  const [signupData, setSignupData] = useState({
    email: "",
    full_name: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
    contact: "",
    confirmPassword: "",
  });

  // --- handle input change ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    if (name === "email") validateEmail(value);
    else if (name === "password") validatePassword(value);
    else if (name === "confirmPassword") validateConfirmPassword(value);
    else if (name === "contact") validatePhone(value);
  };

  // --- Email validation ---
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Please include '@' and enter a valid email address.",
      }));
    } else {
      setValidationErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // --- Password validation ---
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:"<>?~])[A-Za-z\d!@#$%^&*()_+{}:"<>?~]{8,}$/;
    if (!passwordRegex.test(password)) {
      setValidationErrors((prev) => ({
        ...prev,
        password:
          "Password must be at least 8 characters long, contain one uppercase letter and one special character.",
      }));
    } else {
      setValidationErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  // --- Confirm password validation ---
  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== signupData.password) {
      setValidationErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match.",
      }));
    } else {
      setValidationErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  // --- Phone number validation ---
  const validatePhone = (phone) => {
    const phoneRegex = /^98\d{8}$/; // Nepal pattern
    if (!phoneRegex.test(phone)) {
      setValidationErrors((prev) => ({
        ...prev,
        contact: "Phone number must start with 98 and be 10 digits long.",
      }));
    } else {
      setValidationErrors((prev) => ({ ...prev, contact: "" }));
    }
  };

  // --- handle form submit ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate before submit
    validateEmail(signupData.email);
    validatePassword(signupData.password);
    validateConfirmPassword(signupData.confirmPassword);
    validatePhone(signupData.contact);

    if (
      validationErrors.email ||
      validationErrors.password ||
      validationErrors.contact ||
      validationErrors.confirmPassword
    ) {
      return;
    }

    const payload = {
      email: signupData.email,
      full_name: signupData.full_name,
      contact: signupData.contact,
      password: signupData.password,
    };

    dispatch(signupUser(payload));
  };

  // --- redirect after success ---
  useEffect(() => {
    if (success && isEmailVerified) {
      const timer = setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [success, isEmailVerified, navigate]);

  // --- reset form after success ---
  useEffect(() => {
    if (success) {
      setSignupData({
        email: "",
        full_name: "",
        contact: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [success]);

  return (
    <div className="flex items-center justify-center p-10 bg-gradient-to-br from-pink-50 via-white to-red-50">
      <div className="w-full max-w-7xl flex justify-between overflow-hidden shadow-lg rounded-2xl bg-white">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Welcome!</h2>
          <p className="text-gray-600 mb-6">Please Sign Up to Continue</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleChange}
                  className="bg-transparent outline-none flex-1"
                  required
                />
              </div>
              {validationErrors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.email}
                </p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
                <PenTool className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  value={signupData.full_name}
                  onChange={handleChange}
                  className="bg-transparent outline-none flex-1"
                  required
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
                <Phone className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number (e.g., 98XXXXXXXX)"
                  value={signupData.contact}
                  onChange={handleChange}
                  className="bg-transparent outline-none flex-1"
                  required
                />
              </div>
              {validationErrors.contact && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.contact}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleChange}
                  className="bg-transparent outline-none flex-1"
                  required
                />
              </div>
              {validationErrors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-pink-50">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleChange}
                  className="bg-transparent outline-none flex-1"
                  required
                />
              </div>
              {validationErrors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {validationErrors.confirmPassword}
                </p>
              )}
            </div>

            {/* Feedback Messages */}
            {error && (
              <p className="text-red-500 text-sm bg-red-50 p-2 rounded-md">
                {error}
              </p>
            )}
            {success && (
              <p className="text-green-500 text-sm bg-green-50 p-2 rounded-md">
                {success}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Processing..." : "Sign Up"}
            </button>
          </form>

          {/* Redirect to Login */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-pink-500 font-semibold hover:underline"
            >
              Click here to Login
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

export default SignUp;
