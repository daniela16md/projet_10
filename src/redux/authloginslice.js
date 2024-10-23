import { createSlice } from '@reduxjs/toolkit';

const authloginslice = createSlice({
  name: "authlogin",
  initialState: { token: ""},
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.token = ""
    }
  }
}) 

export default authloginslice