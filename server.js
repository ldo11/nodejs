const express = require("express")
const app = express();

const admin = require("./routers/admin")
const profile = require("./routers/profile")
const userRouter = require("./routers/user")
require('dotenv').config();
const port = process.env.PORT
require('./db/db')



app.use('/admin', admin)
app.use('/profile', profile)
app.use('/users', userRouter)
app.use(express.json())
// app.use(userRouter)

app.use((err,req,res,next)=>{
    res.status(err.status ||500);
    res.render('erro',{
        message: err.message, error:{}
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

