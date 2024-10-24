import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

const token = localStorage.getItem("token")

if (token) {
    axios.defaults.headers.common["Authorization"]= `bearer ${token}`
}
export const apiClient = axios.create({
    baseURL: baseURL, 
})

