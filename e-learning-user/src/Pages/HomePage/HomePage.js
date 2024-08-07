import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <h1>Welcome to the Home Page</h1>
        <p>This is your application dashboard.</p>
        <div className="home-actions">
          <button>Action 1</button>
          <button>Action 2</button>
          <button>Action 3</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
