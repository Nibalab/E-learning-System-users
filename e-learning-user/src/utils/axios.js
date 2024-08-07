// src/utils/axios.js

import axios from 'axios';
import { getToken } from './auth'; // Import the getToken function to retrieve the token

// Create an instance of axios with default configurations
const instance = axios.create({
  baseURL: 'http://localhost:8080', // Base URL for your backend API
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});

// Add a request interceptor to include the token in headers
instance.interceptors.request.use(
  (config) => {
    const token = getToken(); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
