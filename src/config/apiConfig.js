import axios from "axios"
// Replace localhost with Render URL
const API_URL = "https://powerhouse-backend-3.onrender.com";

const jwt = localStorage.getItem("jwt")

export const api=axios.create({
    baseURL : API_BASE_URL,
    headers : {
        "Authorization":`Bearer ${jwt}`,
        'Content-Type':"application/json"
    }
})