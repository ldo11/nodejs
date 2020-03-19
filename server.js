const express = require("express")
const cors = require("cors")
const app = express();
const auth = require("./middleware/auth")
const adminRouter = require("./routers/admin")
const profileRouter = require("./routers/profile")
const userRouter = require("./routers/user")
const projectRouter = require("./routers/project")
const executionRouter = require("./routers/execution")
const designRouter = require("./routers/design")
require('dotenv').config();
const port = process.env.PORT
require('./db/db')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/admin', auth, adminRouter);
app.use('/profile', auth, profileRouter);
app.use('/users', userRouter);
app.use('/projects', auth, projectRouter)
app.use('/execution', auth, executionRouter);
app.use('/design', auth, designRouter);


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

