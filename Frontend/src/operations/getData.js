import axios from "axios";
import toast from "react-hot-toast";
import { fetchSliceAction } from "../store/slices/fetchSlice";
import { fetchedDataSliceAction } from "../store/slices/FetchedDataSlice";

// InternShip data Upload function handler
export const getInternShipData = async (dispatch) => {
  try {
    console.log('hello')
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.get(`http://localhost:4000/api/v1/intership`)
    console.log("GET INTERNSHIP DATA RESPONSE ---->>:", res)
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 900
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET INTERNSHIP DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 900
      },
      position: 'bottom-center'
    });
  }

}

// InternShip data Upload function handler
export const getGATEData = async (dispatch) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.get(`http://localhost:4000/api/v1/gate`)
    console.log("GET GATE DATA RESPONSE ---->>:", res)
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 900
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET GATE DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 900
      },
      position: 'bottom-center'
    });
  }

}

// InternShip data Upload function handler
export const getCATData = async (dispatch) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.get(`http://localhost:4000/api/v1/cat`)
    console.log("GET CAT DATA RESPONSE ---->>:", res)
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 900
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET CAT DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 900
      },
      position: 'bottom-center'
    });
  }

}