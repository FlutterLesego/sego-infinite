import axios from "axios";

const development = "http://localhost:8000";
const production = "https://api.jamiidrive.co.za";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? development : production,
  withCredentials: true,
  timeout: 10000,
});

export { axiosInstance };
