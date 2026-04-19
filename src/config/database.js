const db= require("mongoose")

const connectdb= async ()=>{
   await db.connect("url of the db");
}

module.exports= connectdb;
