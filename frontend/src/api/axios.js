import axios from "axios";

const api = axios.create({
 baseURL: "https://car-dealership-inventory-system-z808.onrender.com/api",
});

export default api;