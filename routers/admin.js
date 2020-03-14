const router = require('express').Router()
const User = require('../models/User')

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

    // await db.initialize(dbName, collectionName, function (dbCollection) {
    //     dbCollection.updateOne({email:req.body.email},
    //         {
    //  $set:{status:'active'}
    //     });
    //     res.json("{activate_sucess}")
    // })
    //
});


router.post('/deactivate', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.updateOne({email:req.body.email},
            {
     $set:{status:'deactive'}
        });
        res.json("{DEactivate_sucess}")
    })

});


router.post('/role', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.updateOne({email:req.body.email},
            {
     $set:{role:req.body.role}
        });
        res.json("{ROLE_CHANGE_sucess}")
    })
    
});
module.exports=router;

