import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../containers/authslice'

export const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
});