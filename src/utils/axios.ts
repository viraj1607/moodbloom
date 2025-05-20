import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if you're using cookies for auth
});

export default axiosInstance;
