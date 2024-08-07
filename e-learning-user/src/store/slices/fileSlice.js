import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
  name: 'files',
  initialState: [],
  reducers: {
    setFiles: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFiles } = fileSlice.actions;
export default fileSlice.reducer;
