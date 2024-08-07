import { createSlice } from '@reduxjs/toolkit';

const withdrawalSlice = createSlice({
  name: 'withdrawals',
  initialState: [],
  reducers: {
    setWithdrawals: (state, action) => {
      return action.payload;
    },
    requestWithdrawal: (state, action) => {
      state.push(action.payload);
    },
    approveWithdrawal: (state, action) => {
      const index = state.findIndex(withdrawal => withdrawal._id === action.payload);
      if (index !== -1) {
        state[index].status = 'approved';
      }
    },
    rejectWithdrawal: (state, action) => {
      const index = state.findIndex(withdrawal => withdrawal._id === action.payload);
      if (index !== -1) {
        state[index].status = 'rejected';
      }
    },
  },
});

export const { setWithdrawals, requestWithdrawal, approveWithdrawal, rejectWithdrawal } = withdrawalSlice.actions;
export default withdrawalSlice.reducer;
