// src/pages/LoginPage/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import axios from '../../utils/axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Make sure to create a corresponding CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', { username, password });
      dispatch(login(response.data.token));
      navigate('/home'); // Redirect to the home page after login
    } catch (err) {
      setError('Invalid credentials, please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
