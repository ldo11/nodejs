const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    testers:[{type: String,
        trim: true}],
    TCes: [{
        tc_name:{
            type: String,
            unique: true,
            lowercase: true,
        },
        steps:[{
            action:{
                type: String,
                trim: true
            },
            expected:{
                type: String,
                trim: true
            }
        }],
        status:{
            type: String,
            trim: true
        },
        creator:{
            type: String,
            trim: true
        },
        reviewer:{
            type: String,
            trim: true
        }
    }],
    executions:[{
        tcname:{
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
    }]
});
const project = mongoose.model('projects', projectSchema)

module.exports = project