const mongoose = require('mongoose');
const { ObjectID } = require('mongoose/lib/schema/index');

const {Schema} = mongoose;

const userIdSchema = new Schema({
    product_id: {
        type: ObjectId,
      },
      product_name: {
        type: String,
      },
      category_id: {
        type: ObjectID
      },
      price:{
        type: Number
      }
});

const userId = mongoose.model('userId', userIdSchema);
module.exports = { userId };