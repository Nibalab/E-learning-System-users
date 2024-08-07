import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import classReducer from './slices/classSlice'; 
import enrollmentReducer from './slices/enrollmentSlice';
import withdrawalReducer from './slices/withdrawalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    classes: classReducer, 
    enrollments: enrollmentReducer,
    withdrawals: withdrawalReducer,
  },
});

export default store;
