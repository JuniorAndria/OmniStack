import axios from "axios";

const api = axios.create({
  baseURL: "http://100.68.11.185:3333"
});


export default api;