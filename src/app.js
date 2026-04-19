const express = require("express")
const userauth = require("./middlewares/userauth")
const connectdb = require("./config/database")
// step : create a server, listen to port, send the response


const app = express(); // creates an express js application
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

