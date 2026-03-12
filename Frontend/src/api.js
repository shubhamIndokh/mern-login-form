import axios from "axios";

const API = axios.create({
    baseURL: "https://mern-login-form-baceknd.vercel.app/api/auth",
})

export default API;