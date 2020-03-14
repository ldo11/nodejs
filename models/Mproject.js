const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    testers:[{type: String,
        trim: true}]
});
const project = mongoose.model('Project', projectSchema)

module.exports = project