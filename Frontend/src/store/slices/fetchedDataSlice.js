import { createSlice } from "@reduxjs/toolkit";

const fetchedDataSlice  = createSlice({
  name:'fetchedData',
  initialState:[],
  reducers:{
    setFetchedData:(state,action)=>{
     return [...action.payload]
    },
  }
})

export default fetchedDataSlice;

export const fetchedDataSliceAction = fetchedDataSlice.actions;