import axios from "./axios";

export const getDashboard = async () => {
  const token = localStorage.getItem("token");

  console.log("TOKEN FROM LOCALSTORAGE:", token);

  const response = await axios.get("/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};