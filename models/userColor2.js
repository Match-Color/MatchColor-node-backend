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
  }
});

const userColor = mongoose.model('User', usercolorSchema);
module.exports = { userColor };