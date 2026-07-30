import axios from "./axios";

const getToken = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getVehicles = async (
  sortBy = "",
  order = "asc",
  page = 1,
  limit = 5
) => {
  const response = await axios.get(
    `/vehicles?sort_by=${sortBy}&order=${order}&page=${page}&limit=${limit}`,
    getToken()
  );

  return response.data;
};

export const addVehicle = async (vehicle) => {
  const response = await axios.post(
    "/vehicles",
    vehicle,
    getToken()
  );
  return response.data;
};

export const updateVehicle = async (id, vehicle) => {
  const response = await axios.put(
    `/vehicles/${id}`,
    vehicle,
    getToken()
  );
  return response.data;
};

export const deleteVehicle = async (id) => {
  const response = await axios.delete(
    `/vehicles/${id}`,
    getToken()
  );
  return response.data;
};