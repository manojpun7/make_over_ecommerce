import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { verifyEmail } from "../../services/verfiyEmail";
import { useDispatch } from "react-redux";
import { setEmailVerified } from "../../lib/store/auth/authSlice"; // ✅ import correct action

const VerifyEmail = () => {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (!token) {
      setStatus("error");
      setMessage("Invalid or missing verification token.");
      return;
    }

    const handleVerifyEmail = async () => {
      try {
        const res = await verifyEmail(token);

        if (res.status === 200) {
          setStatus("success");
          setMessage("Your email has been verified successfully!");

          // ✅ Correct action dispatch
          dispatch(setEmailVerified(true));

        } else {
          setStatus("error");
          setMessage("Email verification failed. Please try again.");
        }
      } catch (error) {
        setStatus("error");
        setMessage(
          error.response?.data?.message ||
          "Invalid or expired verification link."
        );
      }
    };

    handleVerifyEmail();
  }, [location, navigate, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="text-center bg-white shadow-lg rounded-2xl p-10 max-w-md">
        {status === "loading" && (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="animate-spin text-pink-500 w-10 h-10" />
            <p className="text-gray-600 text-lg font-medium">
              Verifying your email...
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center space-y-4">
            <CheckCircle className="text-green-500 w-12 h-12" />
            <h2 className="text-xl font-semibold text-gray-800">
              Email Verified!
            </h2>
            <p className="text-gray-600">{message}</p>
            <button
              onClick={() => navigate("/auth/login")}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Go to Login
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center space-y-4">
            <XCircle className="text-red-500 w-12 h-12" />
            <h2 className="text-xl font-semibold text-gray-800">
              Verification Failed
            </h2>
            <p className="text-gray-600">{message}</p>
            <button
              onClick={() => navigate("/auth/signup")}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Back to Signup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
