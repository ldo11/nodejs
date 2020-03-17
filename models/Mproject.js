const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    testers: [String],
});
const project = mongoose.model('Project', projectSchema)

module.exports = project
