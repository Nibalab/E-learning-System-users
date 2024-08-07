// src/pages/RegisterPage/RegisterPage.js
import React, { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterPage.css'; // Import the CSS file for styling

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await axios.post('/users/register', { username, password });
      setSuccess('Registration successful! You can now log in.');
      setError('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
