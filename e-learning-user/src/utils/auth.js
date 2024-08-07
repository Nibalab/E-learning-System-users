export const login = (token) => {
    localStorage.setItem('token', token);
  };
  

  export const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; 
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  