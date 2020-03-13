const router = require('express').Router()
const db = require("../dbconfig");
const dbName = "mwa"; //homework07.lectures
const collectionName = "users";

router.get("/alluser",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
    dbCollection.find({}).toArray((err,array)=>res.json(array));
})});

router.post('/activate/:email', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.updateOne({email:req.params.email},
            {
     $set:{status:'active'}
        });
    })
    
});


router.post('/deactivate/:email', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.updateOne({email:req.params.email},
            {
     $set:{status:'deactive'}
        });
    })
    
});


router.post('/role/:email', async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.updateOne({email:req.params.email},
            {
     $set:{role:req.body.role}
        });
    })
    
});
module.exports=router;

