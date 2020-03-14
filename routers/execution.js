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

router.get("/:testcase",async (req,res)=>{
    try {
        const tc = req.params.testcase;
        const projection = {'tc_name':1,'tc_ver':0,'build_number':1,'results':1};
        Ex.find({tc_name:tc}, (err,data)=>{
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
        oneExResult.save(function(err,data){
            if(err) throw err;
            res.send('update successfully');
        })
    }catch (e) {
        res.send(400).send(e);
    }
});



module.exports=router;
