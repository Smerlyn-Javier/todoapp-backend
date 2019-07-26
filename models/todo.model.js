const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  task: { type: String, required: true },
  description: { type: String },
  done: { type: Boolean, default: false }
});

module.exports = mongoose.model("Todo", TodoSchema);
