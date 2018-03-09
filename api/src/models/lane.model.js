import mongoose from "mongoose";

const LaneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  streams: { type: Array, required: true }
});

export default mongoose.model("Lane", LaneSchema);
