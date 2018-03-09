import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI || "http://localhost:3001";

const client = axios.create({
  baseURL: API_URI
});

const createCanvas = canvas =>
  client.post("/canvases", canvas).then(res => res.data);

const deleteCanvas = id => client.delete(`/canvases/${id}`);

const fetchCanvases = () => client.get("/canvases").then(res => res.data);

const updateCanvas = canvas =>
  client.put(`/canvases/${canvas._id}`, canvas).then(res => res.data); // eslint-disable-line no-underscore-dangle

export default {
  createCanvas,
  deleteCanvas,
  fetchCanvases,
  updateCanvas
};
