const express=require("express");
// const morgan=require("morgan")
const app=express();
const PORT=3000

// app.use(morgan("combined"))

const logMiddleware=(req,res,next)=>{
    //  req.name="Lokesh garg"
    console.log("Req url:",req.url,"Time: ", new Date().toLocaleString());
    // res.send("Hello from middleware")
    next();
}

const welcomeMiddleware=(req,res,next)=>{
    console.log("Welcome To My Website");
    next();
}

app.use(welcomeMiddleware);
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