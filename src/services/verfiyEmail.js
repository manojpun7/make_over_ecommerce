import axios from "axios";

export const verifyEmail = async (token) => {
  try {
    const response = await axios.get(
      "http://18.208.251.169:8000/api/auth/verify-email/",
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
