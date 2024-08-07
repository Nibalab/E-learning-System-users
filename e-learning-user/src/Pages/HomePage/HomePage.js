import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <h1>Welcome to Your Dashboard</h1>
        <p>Select an action below to manage your courses and files.</p>
        <div className="home-actions">
          <button onClick={() => navigate('/classes')}>View Classes</button>
          <button onClick={() => navigate('/files')}>View and Download Files</button>
          <button onClick={() => navigate('/withdrawal')}>Apply for Withdrawal</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
