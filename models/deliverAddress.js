const mongoose = require('mongoose');

const {Schema} = mongoose;

const userIdSchema = new Schema({
    user_id: {
        type: ObjectId,
      },
      address1: {
        type: Number,
        required: true,
      },
      
});

const userId = mongoose.model('userId', userIdSchema);
module.exports = { userId };
