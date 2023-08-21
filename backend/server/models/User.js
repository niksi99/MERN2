const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

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

UserSchema.pre('save', async function(next) {
    if(!this.isModified('Password')) {
        next()
    }

    this.Password = await bcrypt.hash(this.Password, 12)
})

UserSchema.methods.ComparePassword_Hashed_NonHashed = async function (hashed) {
    return await bcrypt.compare(hashed, this.Password) 
}

module.exports = mongoose.model('User', UserSchema)