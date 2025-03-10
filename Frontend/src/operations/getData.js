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

// InternShip data Upload function handler
export const getNPTELData = async (dispatch) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.get(`http://localhost:4000/api/v1/nptel`)
    console.log("GET NPTEL DATA RESPONSE ---->>:", res)
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
    console.log('GET NPTEL DATA ERROR :',error)
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

// PLACEMENT data Upload function handler
export const getPlacementData = async (dispatch) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.get(`http://localhost:4000/api/v1/placement`)
    console.log("GET PLACEMENT DATA RESPONSE ---->>:", res)
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
    console.log('GET PLACEMENT DATA ERROR :',error)
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

// Research  data  function handler
export const  getResearchData = async (dispatch) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.get(`http://localhost:4000/api/v1/research`);

    dispatch(fetchSliceAction.deserializeFetching());
    console.log("GET RESEARCH DATA RESPONSE ---->>:", res)
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
    console.log('GET RESEARCH DATA ERROR :',error)
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

// Research  data  function handler
export const  getFilterInternShipData = async (dispatch,branches) => {
  try {
    const formData = {
      branch:branches
    }
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post("http://localhost:4000/api/v1/intership/filter",formData);
    dispatch(fetchSliceAction.deserializeFetching());
    console.log("GET FILTERED DATA RESPONSE ---->>:", res)
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setEmptyData())
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 500
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET RESEARCH DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 500
      },
      position: 'bottom-center'
    });
  }

}

// Research  data  function handler
export const  getFilterGATEData = async (dispatch,branches) => {
  try {
    const formData = {
      branch:branches
    }
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post("http://localhost:4000/api/v1/gate/filter",formData);
    dispatch(fetchSliceAction.deserializeFetching());
    console.log("GET FILTERED DATA RESPONSE ---->>:", res)
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setEmptyData())
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 500
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET RESEARCH DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 500
      },
      position: 'bottom-center'
    });
  }

}

// Research  data  function handler
export const  getFilterCATData = async (dispatch,branches) => {
  try {
    const formData = {
      branch:branches
    }
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post("http://localhost:4000/api/v1/cat/filter",formData);
    dispatch(fetchSliceAction.deserializeFetching());
    console.log("GET FILTERED DATA RESPONSE ---->>:", res)
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setEmptyData())
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 500
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET RESEARCH DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 500
      },
      position: 'bottom-center'
    });
  }

}

// Research  data  function handler
export const  getFilterPlacementData = async (dispatch,branches) => {
  try {
    const formData = {
      branch:branches
    }
    dispatch(fetchSliceAction.serializeFetching());

    const res = await axios.post("http://localhost:4000/api/v1/placement/filter",formData);
    dispatch(fetchSliceAction.deserializeFetching());
    console.log("GET FILTERED DATA RESPONSE ---->>:", res)
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setEmptyData())
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 500
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET RESEARCH DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 500
      },
      position: 'bottom-center'
    });
  }

}

// Research  data  function handler
export const  getFilterResearchData = async (dispatch,branches) => {
  try {
    const formData = {
      branch:branches
    }
    dispatch(fetchSliceAction.serializeFetching());
    const res = await axios.post("http://localhost:4000/api/v1/research/filter",formData);
    dispatch(fetchSliceAction.deserializeFetching());
    console.log("GET FILTERED DATA RESPONSE ---->>:", res)
    if (res && res?.data?.success) {
      dispatch(fetchedDataSliceAction.setEmptyData())
      dispatch(fetchedDataSliceAction.setFetchedData(res.data.data));
      toast.success(res?.data?.message, {
        style: {
          background: '#001a00',
          color: '#f2f2f2',
          borderRadius: '0px',
          width: '350px',
          height:'40px',
          padding:'0px 10px',
          fontWeight: 500
        },
        position: 'bottom-center'
      })
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('GET RESEARCH DATA ERROR :',error)
    toast.error(error?.response?.data?.message, {
      style: {
        background: '#001a00',
        color: '#f2f2f2',
        borderRadius: '0px',
        width: '400px',
        height:'60px',
        padding:'0px 20px',
        fontWeight: 500
      },
      position: 'bottom-center'
    });
  }

}

