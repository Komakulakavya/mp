const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const userModel=require('./models/user')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/user");
app.post('/login',(req,res)=>{
    const {email,password}= req.body;
    userModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        }
        else {
            res.json("No record existed")
        }
    })
})
app.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(user => {
        // Send the user's name as a response
        res.json({ name: user.name });
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
});

app.listen(3011,()=>{
    console.log("server is running")
}
)