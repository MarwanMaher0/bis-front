import axios from "axios";
import { loadingState } from "@/loading";

axios.defaults.baseURL = "https://184b-154-184-187-142.ngrok-free.app/";

// Existing request interceptor for adding Authorization headers
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    loadingState.isLoading = true; // Set loading state to true before request is sent
    return config;
  },
  (error) => {
    loadingState.isLoading = false; // Reset loading state if request error occurs
    return Promise.reject(error);
  }
);

// Response interceptor for handling loading state
axios.interceptors.response.use(
  (response) => {
    loadingState.isLoading = false; // Reset loading state when response is received
    return response;
  },
  (error) => {
    loadingState.isLoading = false; // Reset loading state if response error occurs
    return Promise.reject(error);
  }
);
