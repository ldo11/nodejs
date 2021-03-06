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
            build_number:req.body.build_number,
            start:req.body.start
        });
        await oneExResult.save(function(err,data){
            if(err) throw err;
            const result = {status: true
                ,"data": oneExResult
            }
            res.json(result)
        })
    }catch (e) {
        res.send(400).send(e);
    }
});
router.post("/end",async (req,res)=>{
    try{
        Ex.findOneAndUpdate({_id:req.body.id},{end:req.body.end}).exec(function(err,data){
            if(err) throw err;
            const result = {status: true
                ,"data": {"id":data._id}
            }
            res.json(result)
        })
    }catch (e) {
        res.send(400).send(e);
    }
});
router.post("/upsertStep",async (req, res) => {
    const results = {
        step_id: req.body.step_id,
        result: req.body.result,
        comment:req.body.comment};
    try{
       Ex.findOne({_id:req.body.id},function (err, execution) {
           let found = 0;
            execution.results.map((todo, i) => {
                if (todo.step_id == results.step_id){
                    found = 1;
                    execution.results[i] = results;
                }
            });

            if(found==0){
                execution.results.push(results);
            }
            execution.save();
           res.json(execution);
       })


    }catch (e) {
        res.send(400).send(e);
    }
})



module.exports=router;
