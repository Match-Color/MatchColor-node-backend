const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    user_name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String, 
    }
});

const User = mongoose.model('User', userSchema);
module.exports = { User };