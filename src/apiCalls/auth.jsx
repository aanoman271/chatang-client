import axiosInstance from "./axiosInstance";

const signupUser = async (user) => {
  const response = await axiosInstance.post("/api/auth/signup", user);
  return response.data;
};

export default signupUser;

export const signinUser = async (user) => {
  const response = await axiosInstance.post("/api/auth/signin", user);
  return response.data;
};
