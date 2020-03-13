const express = require("express")
const app = express();
const admin = require("./admin")




app.use("/admin", admin)
app.listen(3000);