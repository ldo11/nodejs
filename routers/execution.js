const router = require('express').Router();
const Project = require('../models/Mproject');
const collectionName = "projects";

Project.get("/allproject",async (req,res)=>{
    try{
        Project.find({} , function(err,projects){
            console.log(projects);
            res.join(projects);
        });
    }catch(error){
        res.status(400).send(error);
    }
});

module.exports=router;
