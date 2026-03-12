import axios from "axios";

const API = axios.create({
    baseURL: "https://mern-login-backend2.onrender.com/api/auth",
})

export default API;