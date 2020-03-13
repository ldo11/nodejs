const express = require("express")
const app = express();
const admin = require("./admin")

app.post('/',(req, res)=>{
    console.log("first api");
})


app.use("/admin", admin)
app.listen(3000);