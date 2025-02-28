import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../slices/auth';
import fetchSlice from '../slices/fetchSlice';
import fetchedDataSlice from '../slices/FetchedDataSlice';

const appStore = configureStore({
  reducer:{
   auth:authSlice.reducer,
   fetching:fetchSlice.reducer,
   fetchedData:fetchedDataSlice.reducer
  }
})

export default appStore;