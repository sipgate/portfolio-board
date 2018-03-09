import mongoose from "mongoose";

const LaneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  streams: { type: [String], required: true }
});

export default mongoose.model("Lane", LaneSchema);
