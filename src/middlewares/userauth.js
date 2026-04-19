const userauth = (req,res,next)=>{
    const token ="abc";
    const isadmin = token==="abc";
    if(!isadmin){
        res.status(401).send("Unauthorized");
    }
    else{
        next()
    }

}

module.exports= userauth;