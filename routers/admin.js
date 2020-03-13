const router = require('express').Router()
const db = require("../dbconfig");
const dbName = "mwa"; //homework07.lectures
const collectionName = "users";

router.get("/alluser",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
    dbCollection.find({}).toArray((err,array)=>res.json(array));
})});

router.post('/activate', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.updateOne({email:req.body.email},
            {
     $set:{status:'active'}
        });
        res.json("{activate_sucess}")
    })
    
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

