import axios from "./axios";

export const getVehicles = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get("/vehicles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};