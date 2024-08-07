import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setClasses } from '../../store/slices/classSlice';
import { enrollInClass } from '../../store/slices/enrollmentSlice'; 
import axios from '../../utils/axios';
import Navbar from '../../components/Navbar/Navbar'; 
import { useNavigate } from 'react-router-dom';
import './ClassesPage.css'; 

const ClassesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useSelector(state => state.classes);
  const enrollments = useSelector(state => state.enrollments);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('/classes/list', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setClasses(response.data.classes));
      } catch (error) {
        console.error('Error fetching classes:', error.response?.data?.message || error.message);
      }
    };

    fetchClasses();
  }, [dispatch, token]);

  const handleEnroll = async (classId) => {
    try {
      const response = await axios.post('/enrollments/enroll', { classId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(enrollInClass(response.data.enrollment)); // Add enrollment to state
      setMessage('Enrolled successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to enroll');
      console.error('Error enrolling in class:', error.response?.data?.message || error.message);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const isEnrolled = (classId) => enrollments.some(enrollment => enrollment.class._id === classId);

  return (
    <div className="classes-page">
      <Navbar />
      <div className="classes-container">
        <h1>Available Classes</h1>
        <button className="home-button" onClick={() => navigate('/')}>Go Home</button>
        {message && <p className="message">{message}</p>}
        <ul className="classes-list">
          {classes.map(cls => (
            <li key={cls._id} className="class-item">
              <h3>{cls.name}</h3>
              <p>{cls.description}</p>
              <button
                className={`enroll-button ${isEnrolled(cls._id) ? 'enrolled' : ''}`}
                onClick={() => handleEnroll(cls._id)}
                disabled={isEnrolled(cls._id)}
              >
                {isEnrolled(cls._id) ? 'Enrolled' : 'Enroll'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassesPage;
