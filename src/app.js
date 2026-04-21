const express = require("express")
// const userauth = require("./middlewares/userauth")
const connectdb = require("./config/database")
const User = require("./models/user")
// step : create a server, listen to port, send the response


const app = express(); // creates an express js application

app.use(express.json())

app.post("/signup",async (req,res)=>{
    
    const user= new User(req.body)
    try{
    await user.save();
    res.send("User created successfully");
    }
    catch(err){
        res.status(400).send("Error something went wrong",err.message)
    }
})
app.get("/user",async (req,res)=>{
    const useremail= req.body.emailId;
    try{
        // use fineOne for getting exactly one  record of the passed property
    const user= await User.findOne({emailId: useremail});
    if(user.length ===0){
        res.status(400).send("User not found")
    }else{
        res.send(user)
    }
    }
    catch(err){
        console.log(err.message)
        res.status(400).send("Could not find user", err.message)
    }
})
app.delete("/user",async (req,res)=>{
    const userId= req.body.userId;
    try{
        // use fineOne for getting exactly one  record of the passed property
    const user= await User.findByIdAndDelete(userId);
    res.send(user)
    }
    catch(err){
        console.log(err.message)
        res.status(400).send("Could not find user", err.message)
    }
})
connectdb()
.then(()=>{
    console.log("Successfully db connected");
    app.listen(3000, ()=>{ 
        console.log("Started listening to 3000")
    });
})
.catch(()=>{
    console.log("Not connected successfully");
})

