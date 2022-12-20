const mongoose = require('mongoose');

const { Schema } = mongoose;

const usercolorSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  color_id: {
    type: Schema.Types.ObjectId,
    ref: "Color",
    required: true,
  },
  r: {
    type: Number,
    required: true,
  },
  g: {
    type: Number,
    required: true,
  },
  b: {
    type: Number,
    required: true,
  },
});

const userColor = mongoose.model('User', usercolorSchema);
module.exports = { userColor };