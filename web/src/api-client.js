import axios from "axios";

const API_URI = process.env.REACT_APP_API_URI || "http://localhost:3001";

const client = axios.create({
  baseURL: API_URI
});

const createPerson = person =>
  client.post("/persons", person).then(res => res.data);
const deletePerson = id => client.delete(`/persons/${id}`);
const fetchPersons = () => client.get("/persons").then(res => res.data);
const updatePerson = person =>
  client.put(`/persons/${person._id}`, person).then(res => res.data); // eslint-disable-line no-underscore-dangle

const createLane = lane => client.post("/lanes", lane).then(res => res.data);
const deleteLane = id => client.delete(`/lanes/${id}`);
const fetchLanes = () => client.get("/lanes").then(res => res.data);
const updateLane = lane =>
  client.put(`/lanes/${lane._id}`, lane).then(res => res.data); // eslint-disable-line no-underscore-dangle

const createStream = stream =>
  client.post("/streams", stream).then(res => res.data);
const deleteStream = id => client.delete(`/streams/${id}`);
const fetchStreams = () => client.get("/streams").then(res => res.data);
const updateStream = stream =>
  client.put(`/streams/${stream._id}`, stream).then(res => res.data); // eslint-disable-line no-underscore-dangle

const createCanvas = canvas =>
  client.post("/canvases", canvas).then(res => res.data);
const deleteCanvas = id => client.delete(`/canvases/${id}`);
const fetchCanvases = () => client.get("/canvases").then(res => res.data);
const updateCanvas = canvas =>
  client.put(`/canvases/${canvas._id}`, canvas).then(res => res.data); // eslint-disable-line no-underscore-dangle

export default {
  createPerson,
  deletePerson,
  fetchPersons,
  updatePerson,

  createLane,
  deleteLane,
  fetchLanes,
  updateLane,

  createStream,
  deleteStream,
  fetchStreams,
  updateStream,

  createCanvas,
  deleteCanvas,
  fetchCanvases,
  updateCanvas
};
