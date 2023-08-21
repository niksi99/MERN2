const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    SwimmingStrokes: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Swimming"
    }]
})

module.exports = mongoose.model('User', UserSchema)