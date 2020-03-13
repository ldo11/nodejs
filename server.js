const express = require("express")
const app = express();
const admin = require("./admin")
const profile = require("./profile")




app.use("/admin", admin)
app.use("/profile", profile)
app.listen(3000);
