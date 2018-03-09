import mongoose from "mongoose";

const StreamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  persons: { type: [String], required: true },
  canvases: { type: [String], required: true }
});

export default mongoose.model("Stream", StreamSchema);
