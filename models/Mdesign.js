const mongoose = require('mongoose')

const tcSchema = mongoose.Schema({
    name: {
        type: String,
        unique:true,
        lowercase: true
    },
    project_name:{
        type: String,
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
        trim: true
    },
    designer: {
        type: String,
        trim: true
    },
    reviewer: {
        type: String,
        trim: true
    }
});
const tc = mongoose.model('Tc', tcSchema)

module.exports = tc
