// src/utils/auth.js

// Save the JWT token in local storage
export const login = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Remove the JWT token from local storage
  export const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page after logging out
  };
  
  // Check if the JWT token is present in local storage
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  
  // Get the token from local storage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  