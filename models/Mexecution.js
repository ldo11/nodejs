const mongoose = require('mongoose')

const exSchema = mongoose.Schema({
    tc_name:{
        type: String,
        trim: true
    },
    tester:{
        type: String,
        trim: true
    },
    tc_ver:{
        type: String,
        trim: true
    },
    start:{
        type: Date,
        trim: true
    },
    end:{
        type: Date,
        trim: true
    },
    build_number:{
        type: String,
        trim: true
    },
    results:[{
        step_id: String,
        result:{
            type: String,
            trim: true
        },
        comment:{
            type: String,
            trim: true
        }
    }]
});

module.exports = mongoose.model('Ex', exSchema);
