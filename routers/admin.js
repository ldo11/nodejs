const router = require('express').Router()
const User = require('../models/Muser')

router.get("/alluser",async (req,res)=>{
    try {
        User.find({}, function(err, users) {
            res.json(users);
        })
    } catch (error) {
        res.status(400).send(error)
    }
});

router.post('/activate/:email', async (req,res)=>{
    try{
        await User.updateOne({email:req.params.email},{status:'active'});
        res.json("Activate successful!");
    }catch (error) {
        res.status(400).send(error)
    }
});

router.post('/deactivate/:email', async (req,res)=>{
    try{
        await User.updateOne({email:req.params.email},{status:'inactive'});
        res.json("Deactivate successful!");
    }catch (error) {
        res.status(400).send(error)
    }

});


router.post('/role/:email', async (req,res)=>{
    try{
        await User.updateOne({email:req.params.email},{role:req.body.role});
        res.json("Change role successful!");
    }catch (error) {
        res.status(400).send(error)
    }
});

module.exports=router;

