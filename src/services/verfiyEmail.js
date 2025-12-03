import axios from "axios";

export const verifyEmail = async (token) => {
  try {
    const response = await axios.get(
      "http://64.227.179.189:8000/api/auth/verify-email/",
      {
        params: {
          token: token,
          secure: false,
        },
      }
    );
    return response;
  } catch (err) {
    console.error(
      "Email verification failed:",
      err.response?.data || err.message
    );
    throw err;
  }
};
