import { createSlice } from '@reduxjs/toolkit';

const signInSlice = createSlice({
  name: "signIn",
  initialState: { token: localStorage.getItem("token") || "" },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    signOut: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    }
  },
});

export const { signIn, signOut } = signInSlice.actions;

export default signInSlice;

