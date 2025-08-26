import { createSlice } from '@reduxjs/toolkit';

const gridSlice = createSlice({
  name: 'grid',
  initialState: {
    selectedOption: 'AMSNBAPerSize',
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = gridSlice.actions;
export default gridSlice.reducer;
