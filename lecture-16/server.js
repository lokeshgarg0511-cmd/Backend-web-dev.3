const express=require("express");
const app=express();
const PORT=3000

const logMiddleware=(req,res,next)=>{
    //  req.name="Lokesh garg"
    console.log("Req url:",req.url,"Time: ", new Date().toLocaleString());
    // res.send("Hello from middleware")
    next();
}

app.use(logMiddleware);

app.get("/",(req,res)=>{
    console.log("Homepage")
    res.send("Hello From server")
})



app.get("/about",(req,res)=>{
    console.log("Abotpage")
    res.send("Hello from about page")
})

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:${PORT}");
});