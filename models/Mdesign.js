const mongoose = require('mongoose')

const tcSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true,
        lowercase: true
    },
    project_name:{
        type: String,
        required:true,
        lowercase: true
    },
    tc_version:{
        type: String,
        lowercase: true,
        default: '1.00'
    },
    steps: [{
        step_id: mongoose.Types.ObjectId,
        action: {
            type: String,
            trim: true
        },
        expected: {
            type: String,
            trim: true
        }
    }],
    status: {
        type: String,
        trim: true,
        default: '1'
    },
    creator: {
        type: String,
        trim: true,
        default: ' '
    },
    designer: {
        type: String,
        trim: true,
        default: ' '
    },
    reviewer: {
        type: String,
        trim: true,
        default: ' '
    }
});
const tc = mongoose.model('Tc', tcSchema)

module.exports = tc
