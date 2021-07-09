import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    doLogin: () => {},
    doLogout: () => {},
  },
});

export const { doLogin, doLogout } = userSlice.actions;

export default userSlice.reducer;
