// service/auth.js
import axios from "axios";

const API = "http://localhost:1506"; // ganti sesuai backend lo

export async function loginUser(email, password) {
  return await axios.post(`${API}/login`, { email, password });
}

export async function registerUser(email, password) {
  return await axios.post(`${API}/register`, { email, password });
}
