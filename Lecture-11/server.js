const express=require("express")
const app=express();
const PORT=3000

app.use(express.json());  //json data parse

app.get("/about",(req,res)=>{
    // console.log("Request URL" ,req.url);
    // console.log("Request Method" ,req.method);
    // console.log("Request Headers" ,req.headers);
    console.log("Request Query",req.query);
    res.send("Welcome to the about page");
})

app.get("/:id",(req,res)=>{    /// / /:id  bith are different
    // console.log("Request URL" ,req.url);
    // console.log("Request Method" ,req.method);
    // console.log("Request Headers" ,req.headers);
    console.log("Request Params:" ,req.params.id);
    res.send("Welcome to the home page");
})


app.post("/",(req,res)=>{
    // console.log("Request URL" ,req.url);
    // console.log("Request Method" ,req.method);
    console.log("Request Body:" ,req.body);
    res.send("Welcome to the post route");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})