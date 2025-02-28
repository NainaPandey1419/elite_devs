import axios from 'axios';

export const authUpEndPoint =async (formData,route)=>{
  return await axios.post(`http://localhost:4000/user/${route}`,formData);
}

