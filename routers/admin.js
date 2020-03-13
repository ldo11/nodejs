const router = require('express').Router()
const db = require("../dbconfig");
const dbName = "mwa"; //homework07.lectures
const collectionName = "users";

router.get("/alluser",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
    dbCollection.find({}).toArray((err,array)=>res.json(array));
})});

module.exports = router
