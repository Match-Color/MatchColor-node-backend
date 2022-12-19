const mongoose = require('mongoose');

const {Schema} = mongoose;

const userIdSchema = new Schema({
    category_id: {
        type: ObjectId,
      },
      category_name: {
        type: String
      },
      
});

const userId = mongoose.model('userId', userIdSchema);
module.exports = { userId };