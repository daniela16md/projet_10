import axios from 'axios';
import { isTokenValid } from './validityToken';

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: { "Content-Type": "application/json" }
});

// le token dans les headers 
const setAuthHeader = (token) => {
  if (!isTokenValid(token)) throw new Error("Token expired");
  return { Authorization: `Bearer ${token}` };
};

// login
export const loginAPI = async (data) => {
  try {
    const { data: response } = await api.post("/user/login", data);
    const token = response?.token;
    if (token) {
      localStorage.setItem('token', token); 
    }
    return response;
  } catch (error) {
    handleError(error);
  }
};

//  profil utilisateur
export const getProfileAPI = async (token) => {
  try {
    const headers = setAuthHeader(token);
    const { data: response } = await api.post("/user/profile", {}, { headers });
    return response;
  } catch (error) {
    handleError(error);
  }
};

// erreurs
const handleError = (error) => {
  const errorMessage = error.response?.data?.message || error.message;
  console.error("API error:", errorMessage);
  throw new Error(errorMessage);
};
