const mongoose = require('mongoose');

const {Schema} = mongoose;

const usercolorSchema = new Schema({
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

const UserColor = mongoose.model('UserColor', usercolorSchema);
module.exports = { UserColor };
