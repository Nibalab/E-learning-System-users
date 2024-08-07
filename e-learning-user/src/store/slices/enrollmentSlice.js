import { createSlice } from '@reduxjs/toolkit';

const enrollmentSlice = createSlice({
  name: 'enrollments',
  initialState: [],
  reducers: {
    setEnrollments: (state, action) => {
      return action.payload;
    },
    addEnrollment: (state, action) => {
      state.push(action.payload);
    },
    removeEnrollment: (state, action) => {
      return state.filter(enrollment => enrollment.id !== action.payload);
    },
    enrollInClass: (state, action) => {
      // Check if the enrollment already exists
      const existingEnrollment = state.find(enrollment => enrollment.classId === action.payload.classId && enrollment.userId === action.payload.userId);
      if (!existingEnrollment) {
        state.push(action.payload);
      }
    },
  },
});

export const { setEnrollments, addEnrollment, removeEnrollment, enrollInClass } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
