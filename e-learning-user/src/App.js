// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HomePage from './Pages/HomePage/HomePage'; // Ensure this is imported
import { ProtectedRoute, PublicRoute } from './utils/route';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public routes for unauthenticated users */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Protected route for the home page */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            {/* Add more protected routes if necessary */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
