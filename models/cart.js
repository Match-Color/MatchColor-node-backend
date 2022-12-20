const mongoose = require('mongoose');

const {Schema} = mongoose;

const userIdSchema = new Schema({
    cart_id: {
        type: ObjectId,
      },
      user_id: {
        type: ObjectId,
        required: true,
      },
      product_id: {
        type: ObjectId,
      },
      amout:{
         type: Number,
      },
      
});

const userId = mongoose.model('userId', userIdSchema);
module.exports = { userId };