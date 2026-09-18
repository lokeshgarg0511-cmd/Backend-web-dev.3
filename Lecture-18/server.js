const express = require("express");
const app  =express();
const PORT = 3000;

app.get('/', (req,res)=>{
    try{
        throw new Error("Something went wrong guys");
    }catch(error){
        res.status(500).json({success:false,message:"Something went wrong"});
    }
})

app.listen(PORT,()=> console.log("Server is running on port ${PORT}"))
