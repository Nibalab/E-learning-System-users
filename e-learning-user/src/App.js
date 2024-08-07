import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HomePage from './Pages/HomePage/HomePage';
import ClassesPage from './Pages/ClassesPage/ClassesPage';
import FilesPage from './Pages/FilePage/FilePage';
import WithdrawalPage from './Pages/WithdrawalPage/WithdrawalPage'; // Add this line
import { ProtectedRoute, PublicRoute } from './utils/route';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
         
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/withdrawal" element={<WithdrawalPage />} /> {/* Add this line */}
          </Route>

         
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
