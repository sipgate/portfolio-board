import mongoose from "mongoose";

const CanvasSchema = new mongoose.Schema({
  title: { type: String, required: true },
  po: { type: String, required: true },
  stream: { type: String, required: true },
  problem: { type: String, required: true },
  proposedSolution: { type: String, required: true },
  customerValue: { type: String, required: true },
  problemValidation: { type: String, required: true },
  solutionValidation: { type: String, required: true },
  mmf: { type: String, required: true },
  target: { type: String, required: true },
  measuringSuccess: { type: String, required: true },
  strategicFit: { type: String, required: true },
  businessValue: { type: String, required: true },
  estimatedTeamEffort: { type: Number, required: true }
});

export default mongoose.model("Canvas", CanvasSchema);
