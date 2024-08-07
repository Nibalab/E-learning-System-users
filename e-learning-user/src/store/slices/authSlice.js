import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    username: '', 
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username; 
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.username = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
