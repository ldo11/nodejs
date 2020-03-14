const router = require('express').Router()
const Project = require("../models/project.js")
const db = require("../dbconfig");
const dbName = "mwa"; //homework07.lectures
const collectionName = "projects";


//to insert project with project name in body
router.post('/', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.insert({"name":req.body.name});
        res.json("{Project created }")
    })
    
});

//add testcase to project

router.post('/addtestcases', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.updateOne({name:req.body.name},
            {
     $push:{TCes:{name:req.body.testname,reviewer:req.body.reviewer}}
        });
        res.json("{testcase added}")
    })
    
});

//list all test cases for the  given project

router.get("/alltestcases",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
    dbCollection.find({name:req.body.name}).toArray((err,array)=>res.json(array));
})});

//to list all projects
router.get("/all",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
    dbCollection.find({}).toArray((err,array)=>res.json(array));
})});




module.exports=router;