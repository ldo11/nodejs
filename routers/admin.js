const router = require('express').Router()
const User = require('../models/Muser')

router.get("/alluser",async (req,res)=>{
    try {
        User.find({}, function(err, users) {
            var userMap = {};
            users.forEach(function(user) {
                userMap[user._id] = user;
            });
            res.send(userMap);
        })
    } catch (error) {
        res.status(400).send(error)
    }
});

router.post('/activate', async (req,res)=>{
    try{
        await User.updateOne({email:req.body.email},{status:'active'});
        res.json("Activate successful!");
    }catch (error) {
        res.status(400).send(error)
    }
});


router.post('/deactivate', async (req,res)=>{
    try{
        await User.updateOne({email:req.body.email},{status:'inactive'});
        res.json("Deactivate successful!");
    }catch (error) {
        res.status(400).send(error)
    }

});


router.post('/role', async (req,res)=>{
    try{
        await User.updateOne({email:req.body.email},{role:req.body.role});
        res.json("Change role successful!");
    }catch (error) {
        res.status(400).send(error)
    }
});
module.exports=router;

