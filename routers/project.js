const router = require('express').Router()
const MProject = require("../models/Mproject.js")
//const db = require("../dbconfig");
const dbName = "mwa"; //homework07.lectures
const collectionName = "projects";



        //to insert project with project name in body
router.post('/', async (req,res)=>{
    try{
        await MProject.create({name:req.body.name})
        res.json("{Project created! }")
    }catch (error) {
        res.status(400).send(error)
    }
    
});

// get project by id
router.get("/projectbyid",async (req,res)=>{
    try{
        await MProject.find({_id:req.body.id},(error,project)=>{
            res.json({project})
        });
    }catch (error) {
        res.status(400).send(error)
    }
});

//add tester to project

router.post('/addtester', async (req,res)=>{
    try{
        const tester=req.body.testeremail;
        await MProject.update({name:req.body.name}, {$push:{"testers":tester}})
        res.json("{Tester  added  to the project }")
    }catch (error) {
        res.status(400).send(error)
    }
});



//find all about project:all testers to be refined

router.get("/alltesters",async (req,res)=>{
    try{
        await MProject.find({name:req.body.name},(error,project)=>{
            res.json({project})
        });
    }catch (error) {
        res.status(400).send(error)
    }
});




module.exports=router;