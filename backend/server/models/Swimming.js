const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const SwimmingSchema = new mongoose.Schema({
    Stroke: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Distance: {
        type: mongoose.Schema.Types.ObjectId, ref: "Distance"
    },
    ImageUrl: {
        type: String,
        required: true,
    },
    RangeOfTIme: {
        type: Number,
        required: true,
    },
    Swimmer: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true,
    }
})


module.exports = mongoose.model('Swimming', SwimmingSchema)