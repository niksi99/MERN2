const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const SwimmingSchema = new mongoose.Schema({
    Stroke: {
        type: String,
        required: true,
    },
    Distances: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Distance"
    }],
    ImageUrl: {
        type: String,
    },
})


module.exports = mongoose.model('Swimming', SwimmingSchema)