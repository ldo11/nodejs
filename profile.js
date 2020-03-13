const express = require("express");
const router = express.router();
const db = require("./dbconfig");
const dbName = "mwa";
const collectionName = "users";

router.get("/alluser",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.find({}).toArray((err,array)=>res.json(array));
    })});
