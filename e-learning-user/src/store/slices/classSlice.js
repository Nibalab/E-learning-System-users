import { createSlice } from '@reduxjs/toolkit';

const classSlice = createSlice({
  name: 'classes',
  initialState: [],
  reducers: {
    setClasses: (state, action) => {
      return action.payload;
    },
    addClass: (state, action) => {
      state.push(action.payload);
    },
    updateClass: (state, action) => {
      const index = state.findIndex(cls => cls._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeClass: (state, action) => {
      return state.filter(cls => cls._id !== action.payload);
    },
  },
});

export const { setClasses, addClass, updateClass, removeClass } = classSlice.actions;
export default classSlice.reducer;
