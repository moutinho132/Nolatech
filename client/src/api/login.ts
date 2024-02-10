import { ILogin } from "../interfaces/login.interface";
import { instance } from "./base.api";

const endpoint = "auth";

export const loginAuth = async (userData: ILogin) => {
  try {
    const response = await instance.post(`${endpoint}/login`, userData);
    return response.data; 
  } catch (error) {
    throw new Error("Credenciales inválidas"); 
}
}