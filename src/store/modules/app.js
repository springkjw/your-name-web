import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    doTheme: () => {},
  },
});

export const { doTheme } = appSlice.actions;

export default appSlice.reducer;
