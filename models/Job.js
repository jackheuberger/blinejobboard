const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'open',
        enum: ['open', 'closed']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model('Job', JobSchema)