import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export default mongoose.model("Person", PersonSchema);
