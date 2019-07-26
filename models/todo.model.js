const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  task: { type: String, required: true },
  description: { type: String },
  done: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Todo", TodoSchema);
