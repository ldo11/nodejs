const router = require('express').Router()
const Project = require("../models/Mproject.js")

        //to insert project with project name in body
router.post('/', async (req,res)=>{
    try{
        await Project.create({name:req.body.name})
        res.json("{Project created! }")
    }catch (error) {
        res.status(400).send(error)
    }
    
});

//add testcase to project

router.post('/addtestcases', async (req,res)=>{
    try{
        await Project.updateOne({name:req.body.name}, {$push:{"TCes":{tc_name:req.body.tcname}}})
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