const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    student: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', UserSchema)