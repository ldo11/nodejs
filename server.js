const express = require("express")
const app = express();
const auth = require("./middleware/auth")
const adminRouter = require("./routers/admin")
const profileRouter = require("./routers/profile")
const userRouter = require("./routers/user")
const projectRouter = require("./routers/project")
require('dotenv').config();
const port = process.env.PORT
require('./db/db')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/admin', adminRouter)
app.use('/profile', profileRouter)
app.use('/users', userRouter)
app.use('/projects', projectRouter)

app.use((err,req,res,next)=>{
    res.status(err.status ||500);
    res.render('erro',{
        message: err.message, error:{}
    });
})

// app.get("/testjwt",auth,(req,res)=>{
//     res.json("hahahaha")
// })
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

