const mongoose = require('mongoose');

const { Schema } = mongoose;

const colorSchema = new Schema({
  color_name: {
    type: String,
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

module.exports = mongoose.model('Color', colorSchema);