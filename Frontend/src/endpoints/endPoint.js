export const signUp =async (formData,route)=>{
  return await axios.post(`http://localhost:4000/auth/${route}`,formData);
}

export const login =async (formData,route)=>{
  return await axios.post(`http://localhost:4000/auth/${route}`,formData);
}