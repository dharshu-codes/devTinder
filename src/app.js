const express = require("express")
// const userauth = require("./middlewares/userauth")
const connectdb = require("./config/database")
const User = require("./models/user")
// step : create a server, listen to port, send the response


const app = express(); // creates an express js application

app.use(express.json())

app.post("/signup",(req,res)=>{
    
    const user= new User(req.body)
    user.save();
    res.send("User reated successfully");
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

