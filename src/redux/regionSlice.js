// regionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'region',
  initialState: 'All',
  reducers: {
    setRegion: (state, action) => action.payload,
  },
});

export const { setRegion } = regionSlice.actions;

export default regionSlice.reducer;
