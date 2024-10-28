import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from './userProfileSlice';
import signInSlice from './signInSlice'

export const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
    userProfileSlice: userProfileSlice.reducer,
  },
});


export default store;