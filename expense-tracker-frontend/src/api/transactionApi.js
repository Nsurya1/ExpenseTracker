import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:7285/api", 
});

export const getTransactions = () => API.get("/transactions");
export const addTransaction = (data) => API.post("/transactions", data);
