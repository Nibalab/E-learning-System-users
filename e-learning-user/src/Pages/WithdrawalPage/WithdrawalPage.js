import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './WithdrawalPage.css';
import { setEnrollments } from '../../store/slices/enrollmentSlice';

const WithdrawalPage = () => {
  const [selectedEnrollment, setSelectedEnrollment] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const enrollments = useSelector((state) => state.enrollments || []);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await axios.get('/enrollments/my-enrollments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setEnrollments(response.data.enrollments));
      } catch (error) {
        console.error('Error fetching enrollments:', error.response?.data?.message || error.message);
      }
    };

    fetchEnrollments();
  }, [dispatch, token]);

  const handleWithdrawalRequest = async () => {
    if (!selectedEnrollment) {
      setMessage('Please select a class to withdraw from.');
      return;
    }

    try {
      const response = await axios.post('/withdrawals/request', { enrollmentId: selectedEnrollment }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error submitting withdrawal request.');
      console.error('Error:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="withdrawal-page">
      <Navbar />
      <div className="withdrawal-container">
        <h1>Apply for Withdrawal</h1>
        <button className="back-button" onClick={() => navigate('/home')}>Back to Home</button>
        <div className="withdrawal-form">
          <select
            value={selectedEnrollment}
            onChange={(e) => setSelectedEnrollment(e.target.value)}
          >
            <option value="">Select a class to withdraw</option>
            {enrollments.map((enrollment) => (
              <option key={enrollment._id} value={enrollment._id}>
                {enrollment.class.name}
              </option>
            ))}
          </select>
          <button onClick={handleWithdrawalRequest}>Submit Withdrawal</button>
          {message && <p className={`message ${message === 'Withdrawal request submitted' ? 'success' : 'error'}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalPage;
