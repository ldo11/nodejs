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
    build_number:{
        type: String,
        trim: true
    },
    results:[{
        result:{
            type: String,
            trim: true
        },
        comment:{
            type: String,
            trim: true
        },
        evidents:[{
            img:{
                type: String,
                trim: true
            }
        }]
    }]
});

module.exports = mongoose.model('Ex', exSchema);
