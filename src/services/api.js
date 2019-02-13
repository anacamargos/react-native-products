import axios from "axios";

const api = axios.create({
  baseURL: "https://rocketseat-node.herokapp.com/api"
});

export default api;
