const express = require("express");
const router = express.Router();
const db = require("../dbconfig");
const dbName = "mwa";
const collectionName = "users";

router.get("/:email",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        const email = req.params.email;
        dbCollection.find({"email":email}).toArray((err,array)=>res.json(array));
    })
});

router.post("/",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const avatar = req.body.avatar;
        const phone = req.body.phone;
        const role = req.body.role;
        const status = req.body.status;

        dbCollection.insertOne({"email":email, "name":name,"password":password, "avatar":avatar,"phone":phone,"role":role,"status":status});
        res.json('inserted...');
    })
});


module.exports = router;
