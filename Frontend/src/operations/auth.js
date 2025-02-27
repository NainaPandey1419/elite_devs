import toast from "react-hot-toast";
import { authSliceAction } from "../store/slices/auth";
import { fetchSliceAction } from "../store/slices/fetchSlice";
import { authUpEndPoint } from "../endpoints/endPoint";

// Signup function handler
export const signUp = async (navigate, dispatch, signUpData) => {
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await authUpEndPoint(signUpData,'signup')
    dispatch(fetchSliceAction.deserializeFetching());
    if (res && res?.data?.success) {
      console.log("SIGNUP RESPONSE ---->>:", res)
      //SAVE USER INFO LOACL STORAGE 
      window.localStorage.setItem('currUser', JSON.stringify(res.data.currUser));
      dispatch(authSliceAction.setUserData(res.data.currUser))
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

      navigate('/');
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
    console.log('SIGNUP ERROR :',error)
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

// Login  function handler
export const signIn = async (navigate,dispatch,formData) => {
  console.log(formData)
  try {
    dispatch(fetchSliceAction.serializeFetching());
    const res = await authUpEndPoint(formData,'login')
    dispatch(fetchSliceAction.deserializeFetching());
    if (res.data && res.data.success) {
      console.log("LOGIN RESPONSE --->>>", res)
      dispatch(authSliceAction.setUserData(res.data.currUser));
      window.localStorage.setItem('currUser', JSON.stringify(res.data.currUser));
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
      document.getElementById('my_modal_3').close()
      navigate('/');
    }
  } catch (error) {
    dispatch(fetchSliceAction.deserializeFetching());
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
      position: 'right-center'
     });
    console.log('LOGIN ERROR : ', error)
  }

}


// SignOut function  handler
export const signOut = (dispatch, navigate,setUserDropDown) => {
  dispatch(authSliceAction.signout())
  dispatch(fetchSliceAction.deserializeFetching());
  if(setUserDropDown){
    setUserDropDown(()=>false)
  }
  toast.success('Logout successful', {
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
  navigate('/')
}



