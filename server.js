const express = require("express")
const app = express();
const admin = require("./routers/admin")
const profile = require("./routers/profile")




app.use('/admin', admin)
app.use('/profile', profile)

app.use((err,req,res,next)=>{
    res.status(err.status ||500);
    res.render('erro',{
        message: err.message, error:{}
    });
})
app.listen(3000);
