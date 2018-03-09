import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";

import canvasRoutes from "./routes/canvas.route";
import laneRoute from "./routes/lane.route";
import streamRoute from "./routes/stream.route";
import personRoute from "./routes/person.route";

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

mongoose.connect(MONGO_URI).catch(error => {
  console.error("Could not connect to mongodb", error); // eslint-disable-line no-console
  process.exit(1);
});

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use("/canvases", canvasRoutes);
app.use("/lanes", laneRoute);
app.use("/streams", streamRoute);
app.use("/persons", personRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`); // eslint-disable-line no-console
});
