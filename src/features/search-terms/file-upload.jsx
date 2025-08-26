'use client';
import { createSlice } from '@reduxjs/toolkit';

const fileUploadSlice = createSlice({
  name: 'fileUpload',
  initialState: {
    openModal: false,
  },
  reducers: {
    openModal: (state) => {
      state.openModal = true;
    },
    closeModal: (state) => {
      state.openModal = false;
    },
  },
});

export const { openModal, closeModal } = fileUploadSlice.actions;
export default fileUploadSlice.reducer;
