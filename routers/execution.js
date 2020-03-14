const router = require('express').Router();
const Project = require('../models/Mproject');


router.get("/allproject",async (req,res)=>{
    try{
        Project.find({} , function(err,projects){
            res.json(projects);
        });
    }catch(error){
        res.status(400).send(error);
    }
});

router.get("/:name",async (req,res)=>{
    try {
        const projectName = req.params.name;
        Project.findOne({"name":projectName}, function(err,project){
            res.json(project);
        });
    }catch (e) {
        res.status(400).send(e);
    }
});

router.post("/",async (req,res)=>{
    try {
        const project = new Project(req.body);
        await project.save();
        res.send('updated successfully');
    }catch (e) {
        res.status(400).send(e);
    }
});

module.exports=router;
