import axios from "axios";

axios.defaults.baseURL = "https://48e0-156-209-180-220.ngrok-free.app/";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
