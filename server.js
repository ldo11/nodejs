const express = require("express")
const app = express();

const admin = require("./routers/admin")
const profile = require("./routers/profile")
const userRouter = require("./routers/user")
require('dotenv').config();
const port = process.env.PORT
require('./db/db')
const bodyParser = require('body-parser')



app.use(express.json())
// app.use(userRouter)
app.use(express.urlencoded({ extended: true }))
app.use((err,req,res,next)=>{
    res.status(err.status ||500);
    res.render('erro',{
        message: err.message, error:{}
    });
})


app.use('/admin', admin)
app.use('/profile', profile)
app.use('/users', userRouter)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

