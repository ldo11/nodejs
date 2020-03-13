<<<<<<< HEAD:profile.js
const express = require("express");
const router = express.Router();
const db = require("./dbconfig");
=======
const router = require('express').Router()
const db = require("../dbconfig");
>>>>>>> fix router bug:routers/profile.js
const dbName = "mwa";
const collectionName = "users";

router.get("/:email",async (req,res)=>{
    await db.initialize(dbName, collectionName, function (dbCollection) {
        dbCollection.find({}).toArray((err,array)=>res.json(array));
    })});
module.exports = router