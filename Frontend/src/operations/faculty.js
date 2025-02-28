import axios from "axios";
import toast from "react-hot-toast";
import { fetchSliceAction } from "../store/slices/fetchSlice";

// InternShip data Upload function handler
export const uploadMidSemData = async (dispatch, internshipData) => {
  const data =new FormData();
  data.append('internshipData',internshipData);
  try {
    const data = new FormData();
    data.append('intershipData', internShipDataFile);
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post(`http://localhost:4000/api/v1/intership/upload`,{internshipData},{
      // withCredentials: true, // Enables sending cookies/auth headers
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    console.log("UPLOAD INTERNSHIP DATA RESPONSE ---->>:", res)
    dispatch(fetchSliceAction.deserializeFetching());
    console.log("UPLOAD INTERNSHIP DATA RESPONSE ---->>:", res)
    if (res && res?.data?.success) {
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
