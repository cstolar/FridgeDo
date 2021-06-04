import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  TodoText: String,
});

module.exports = mongoose.model("Campground", CampgroundSchema
