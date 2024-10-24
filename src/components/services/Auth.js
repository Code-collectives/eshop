import { apiClient } from "./config"
//authuntigating for signup check if the backend used register or signup
export const apiSignup = async (payload) => {
    return await apiClient.post("/users/register", payload )
}
//authantigating for login
export const apiLogin = async (payload) => 
   apiClient.post("/users/signIn", payload )
