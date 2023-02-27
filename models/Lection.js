const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: "List" },
  text: { type: String, required: true },
  order: { type: Number, required: true },
  complete: { type: Boolean, required: true },
  documentId: { type: String, required: true },
  pollQuestion: { type: String },
  pollOptions: { type: Array },
  pollId: { type: Array },
  optionsReply: { type: Array },
});

module.exports = model("Lection", schema);
