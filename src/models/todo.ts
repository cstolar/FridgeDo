import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: String,
  date: String,
  finished: Boolean,
});

export default mongoose.model("ToDo", TodoSchema);
