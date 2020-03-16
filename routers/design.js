const router = require('express').Router()
const tc = require('../models/Mdesign')

router.get("/p/:projectname",async (req,res)=>{
    try {
        await tc.find({project_name:req.params.projectname}).exec((error, tc)=>{
            res.json(tc);
        });
    } catch (error) {
        res.status(400).send(error)
    }

})
router.get("/n/:name",async (req,res)=>{
    try {
        await tc.find({name:req.params.name}).exec((error, tc)=>{
            res.json(tc);
        });
    } catch (error) {
        res.status(400).send(error)
    }

})
router.post("/",async (req,res)=>{
    try {
        const testcase = new tc(req.body)
        await testcase.save();
        res.json("Test case created")
    } catch (error) {
        res.status(400).send(error)
    }

})
router.delete("/:id",async (req,res)=>{
    try {
        tc.findByIdAndRemove(req.params.id).exec(function(err, result){res.json(result)});

    } catch (error) {
        res.status(400).send(error)
    }

})
router.post("/update/:name",async (req,res)=>{
    try {
        await tc.update({name:req.params.name},{
            name:req.body.name,
            tc_version:req.body.tc_version,
            status:req.body.status,
            reviewer:req.body.reviewer
        });
        res.json("Updated");
    } catch (error) {
        res.status(400).send(error)
    }
})
router.post("/addstep/:name",async (req,res)=>{
    try {
        const step = {action:req.body.action,expected:req.body.expected};
        await tc.update({name:req.params.name},{$push:{"steps":step}})
        res.json("Step added");
    } catch (error) {
        res.status(400).send(error)
    }
})
router.post("/updatestep/:id",async (req,res)=>{
    try {
        await tc.update({"steps._id":req.params.id},{"steps.$.action":req.body.action,"steps.$.expected":req.body.expected})
        res.json("Step updated");
    } catch (error) {
        res.status(400).send(error)
    }

})
module.exports=router;
