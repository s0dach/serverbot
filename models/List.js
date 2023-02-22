const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  usersId: { type: Array },
  active: { type: Boolean },
  editable: { type: Boolean },
  lections: [{ type: Types.ObjectId, ref: "Lection" }],
  optionsReply: { type: Array },
  published: { type: Number },
});

module.exports = model("List", schema);
