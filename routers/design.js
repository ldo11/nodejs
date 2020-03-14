const router = require('express').Router()
const tc = require('../models/Mdesign')

router.get("/p/:projectname",async (req,res)=>{
    await tc.find({project_name:req.params.projectname}).exec((error, tc)=>{
        res.json(tc);
    });
})
router.get("/n/:name",async (req,res)=>{
    await tc.find({name:req.params.name}).exec((error, tc)=>{
        res.json(tc);
    });
})
router.post("/",async (req,res)=>{
    const testcase = new tc(req.body)
    await testcase.save();
    res.json("Test case created")
})
router.post("/update/:name",async (req,res)=>{
    await tc.update({name:req.params.name},{
        name:req.body.name,
        tc_version:req.body.tc_version,
        status:req.body.status,
        reviewer:req.body.reviewer
    });
    res.json("Updated");
})
router.post("/addstep/:name",async (req,res)=>{
    const step = {action:req.body.action,expected:req.body.expected};
    await tc.update({name:req.params.name},{$push:{"steps":step}})
    res.json("Step added");
})
router.post("/updatestep/:id",async (req,res)=>{
    await tc.update({"steps._id":req.params.id},{"steps.$.action":req.body.action,"steps.$.expected":req.body.expected})
    res.json("Step updated");
})
module.exports=router;