const express = require("express")
const app = express();
const auth = require("./middleware/auth")
const admin = require("./routers/admin")
const profile = require("./routers/profile")
const userRouter = require("./routers/user")
require('dotenv').config();
const port = process.env.PORT
require('./db/db')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/admin', admin)
app.use('/profile', profile)
app.use('/users', userRouter)

app.use((err,req,res,next)=>{
    res.status(err.status ||500);
    res.render('erro',{
        message: err.message, error:{}
    });
})

app.get("/testjwt",auth,(req,res)=>{
    res.json("hahahaha")
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

