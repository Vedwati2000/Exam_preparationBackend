const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userQuestion : {
        type : String,
        required : true
    },
    aiResponse :{
        type : String,
        required : true
    },
    createAt : {
        type: Date,
        default : Date.Now
    }
});

module.exports = mongoose.model('Chat', chatSchema);