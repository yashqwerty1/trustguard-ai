import axios from "axios";

const API = axios.create({
  baseURL: "https://trustguard-ai-k1z0.onrender.com/dashboard",
});

export default API;
