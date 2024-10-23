import { configureStore } from '@reduxjs/toolkit';
import authloginslice from '../redux/authloginslice';
import userslice from '../redux/userslice';


export const store = configureStore({
  reducer: {
    auth: authloginslice.reducer,
    usersaccount: userslice.reducer,
  }
});

export const { login, logout } = authloginslice.actions;
export const  { usersData, setusersData } = userslice.actions;
export default store