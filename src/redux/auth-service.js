import axios from 'axios';

//const API_URL = "https://radiant-anchorage-70390.herokuapp.com/api/v1/auth/";
const API_URL = "http://backend.docscanner.teambros.co.in/api/v1/auth/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL+"register", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    console.log(response.data)
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  console.log(response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService