const router = require('express').Router()
const Project = require("../models/project.js")
//const db = require("../dbconfig");
const dbName = "mwa"; //homework07.lectures
const collectionName = "projects";

router.post('/addtestcases', async (req,res)=>{
    try{
        await Project.update({name:req.body.name}, {$push:{TCes:{name:req.body.testname}}})
        res.json("{Test case added }")
    }catch (error) {
        res.status(400).send(error)
    }
});

router.get("/alltestcases",async (req,res)=>{
    try{
        await Project.find({name:req.body.name},(error,project)=>{
            res.json({project})
        });
    }catch (error) {
        res.status(400).send(error)
    }
});




module.exports=router;