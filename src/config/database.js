const db= require("mongoose")

const connectdb= async ()=>{
   await db.connect("mongodb://dharshinik1303_db_user:bkr91lj4RXkanC@ac-xqflu44-shard-00-00.vsueggj.mongodb.net:27017,ac-xqflu44-shard-00-01.vsueggj.mongodb.net:27017,ac-xqflu44-shard-00-02.vsueggj.mongodb.net:27017/?ssl=true&replicaSet=atlas-11lnq9-shard-0&authSource=admin&appName=node-js");
}

module.exports= connectdb;
