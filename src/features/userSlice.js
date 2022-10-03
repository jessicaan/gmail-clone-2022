import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, user) => {
      state.user = user.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
