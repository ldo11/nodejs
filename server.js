const express = require("express")
const app = express();

const admin = require("./routers/admin")
const profile = require("./routers/profile")
const userRouter = require("./routers/user")
const port = process.env.PORT
require('dotenv').config();
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
<<<<<<< Updated upstream
app.listen(3000,()=>console.log('server is running on port 3000...'));
=======
app.listen(3000, () => {
    console.log(`Server running on port ${3000}`)
});
>>>>>>> Stashed changes
