import axiosInstance from "./axiosInstance";

export const getLoggedUser = async () => {
  const response = await axiosInstance.get("/api/user/get-logged-user");
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axiosInstance.get("/api/user/get-all-user");
  return response.data;
};
