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

//to get all projects
router.get('/allprojects',async (req,res)=>{
    try{
        await MProject.find({}).sort({_id:-1}).exec((error,projects) =>{
           res.json(projects);
        });
    }catch (e) {
        res.status(400).send(e);
    }
});


// get project by tester
router.get("/e/:email",async (req,res)=>{
    try{
        await MProject.find({testers:req.params.email},(error,project)=>{
            res.json(project)
        });
    }catch (error) {
        res.status(400).send(error)
    }
});

// get project by id
router.get("/projectbyid/:id",async (req,res)=>{
    try{
        await MProject.find({_id:req.params.id},(error,project)=>{
            res.json({project})
        });
    }catch (error) {
        res.status(400).send(error)
    }
});

//find project by name
router.get("/:projectName" , async (req,res)=>{
    try{
        await MProject.find({name:req.params.projectName}, (err,project)=>{
            res.json({project});
        })
    }catch{
        res.status(400).send(error);
    }
});

//add tester to project

router.post('/addtester/:projectname', async (req,res)=>{
    try{
        const tester=req.body.testeremail;
        console.log(tester);
        await MProject.updateOne({name:req.params.projectname}, {$addToSet:{"testers":req.body.testeremail}},{ "upsert": true })
            .exec((error,result)=>{
                if(error) res.json(error)
                res.json(result)
            });

    }catch (error) {
        res.status(400).send(error)
    }
});



//find all about project:all testers to be refined

router.get("/alltesters/:projectname",async (req,res)=>{
    try{
        await MProject.find({name:req.params.projectname},(error,project)=>{
            res.json({project})
        });
    }catch (error) {
        res.status(400).send(error)
    }
});


module.exports=router;
