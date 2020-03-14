const router = require('express').Router();
const Ex = require('../models/Mexecution');


router.get("/allex",async (req,res)=>{
    try{
        Ex.find({} , function(err,projects){
            res.json(projects);
        });
    }catch(error){
        res.status(400).send(error);
    }
});

router.get("/:id",async (req,res)=>{
    try {
        Ex.findById(req.params.id,(err,data)=>{
            res.json(data);
        });

    }catch (e) {
        res.status(400).send(e);
    }
});

router.get("/:testcase",async (req,res)=>{
    try {
        const tcName = req.params.testcase;
        Ex.find({tc_name:tcName}, (err,data)=>{
            res.json(data);
        });

    }catch (e) {
        res.status(400).send(e);
    }
});

router.post("/",async (req,res)=>{
    try{
        const oneExResult = new Ex({
            tc_name:req.body.tc_name,
            tester:req.body.tester,
            tc_ver:req.body.tc_ver,
            build_number:req.build_number,
            results:req.results
        });
        await oneExResult.save(function(err,data){
            if(err) throw err;
            res.send('update successfully' , oneExResult.id);
        })
    }catch (e) {
        res.send(400).send(e);
    }
});



module.exports=router;
