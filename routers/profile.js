const express = require("express");
const router = express.Router();
const User = require('../models/Muser');
router.get("/:email",async (req,res)=>{
    try{
        await User.findOne({email:req.body.email},(error,user)=>{
            res.json({user});
        });
    }catch (error) {
        res.status(400).send(error);
    }
});

router.post("/",async (req,res)=>{
    try{
        await User.findOneAndUpdate({email:req.body.email},{name:req.body.name, phone:req.body.phone, avatar:req.body.avatar});
        res.json("Profile update successfully");
    }catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;
