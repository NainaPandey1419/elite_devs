import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../slices/auth';
import fetchSlice from '../slices/fetchSlice';

const appStore = configureStore({
  reducer:{
   auth:authSlice.reducer,
   fetching:fetchSlice.reducer
  }
})

export default appStore;