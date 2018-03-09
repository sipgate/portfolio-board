import axios from "axios";

const API_URI = process.env.API_URI || "http://localhost:3001";

const client = axios.create({
  baseURL: API_URI
});

const fetchCanvases = () => client.get("/canvases").then(res => res.data);

export default {
  fetchCanvases
};
