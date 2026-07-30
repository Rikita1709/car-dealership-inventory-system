import axios from "./axios";

const getToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const purchaseVehicle = async (id) => {
  const response = await axios.post(
    `/vehicles/${id}/purchase`,
    {},
    getToken()
  );

  return response.data;
};

export const getPurchaseHistory = async () => {
  const response = await axios.get(
    "/purchases",
    getToken()
  );

  return response.data;
};