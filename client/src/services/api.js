import axios from "axios";

// we need to pass the baseURL as an object
export const API = axios.create({
  baseURL: "http://localhost:8080/",
});
