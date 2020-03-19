const express = require('express')
const User = require('../models/Muser')

const router = express.Router()

router.post('/create', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.json("Account Created")
    } catch (error) {
        res.status(400).send(error)
    }
})
router.post('/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        } else {
            User.findOne({email: email},{status: 1}).exec((error,data)=>{
                console.log();
                if (data.status === 2){
                    return res.status(401).send({error: 'Login failed! User is inactive'})
                }
            })
        }
        const token = await user.generateAuthToken()

        const result = {status: true
            ,"data": {"id": user._id, "token": token, "user":user, "role":user.role, "email":user.email}
        }

        res.json(result)
    } catch (error) {
        res.status(400).send(error)
    }

})

router.get('/alluser', async (req, res) => {
    // Create a new user
    try {
        User.find({}).exec((error,email)=>{
            const result = email.map((x)=>{return {'email':x.email}});
            res.json(result);
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
