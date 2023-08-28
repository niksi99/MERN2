const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const DistanceSchema = new mongoose.Schema({
    Meters: {
        type: Number,
        required: true,
        unique: true
    },
})


module.exports = mongoose.model('Distance', DistanceSchema)