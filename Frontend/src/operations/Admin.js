import axios from "axios";
import toast from "react-hot-toast";
import { fetchSliceAction } from "../store/slices/fetchSlice";

// InternShip data Upload function handler
export const uploadInternShipData = async (dispatch, internShipDataFile) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post(`http://localhost:4000/api/v1/internship/upload`,internShipDataFile,{
      withCredentials: true, // Enables sending cookies/auth headers
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      console.log("UPLOAD INTERNSHIP DATA RESPONSE ---->>:", res)
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
      document.getElementById('my_modal_1').close();
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    document.getElementById('my_modal_1').close();
    console.log('UPLOAD INTERNSHIP DATA ERROR :',error)
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

// Placement data Upload function handler
export const uploadPlacementData = async (dispatch, placementDataFile) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post(`http://localhost:4000/api/v1/placement/upload`,placementDataFile,{
      withCredentials: true, // Enables sending cookies/auth headers
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      console.log("UPLOAD PLACEMENT DATA RESPONSE ---->>:", res)
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
      document.getElementById('my_modal_1').close();
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    document.getElementById('my_modal_1').close();
    console.log('UPLOAD PLACEMENT DATA ERROR:',error)
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

// GATE data Upload function handler
export const uploadGATEData = async (dispatch, GATEDataFile) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post(`http://localhost:4000/api/v1/gate/upload`,GATEDataFile,{
      withCredentials: true, // Enables sending cookies/auth headers
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      console.log("UPLOAD GATE DATA RESPONSE ---->>:", res)
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
      document.getElementById('my_modal_1').close();
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    document.getElementById('my_modal_1').close();
    console.log('UPLOAD GATE DATA ERROR :',error)
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

// CAT data Upload function handler
export const uploadCATData = async (dispatch, CATDataFile) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post(`http://localhost:4000/api/v1/internship/cat`,CATDataFile,{
      withCredentials: true, // Enables sending cookies/auth headers
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      console.log("UPLOAD CAT DATA RESPONSE ---->>:", res)
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
      document.getElementById('my_modal_1').close();
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    document.getElementById('my_modal_1').close();
    console.log('UPLOAD CAT DATA ERROR :',error)
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