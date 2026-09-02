const express=require("express")

const app=express()

const PORT =3000;
const users = [
    { id: 1, name: "lokesh", email: "lokeshgarg0511@gmail.com" },
    { id: 1, name: "atishay", email: "frrf1234@gmail.com" },
    { id: 1, name: "raghav", email: "gffrhj1234@gmail.com" },
    { id: 1, name: "rohit", email: "gfddfs12ds34@gmail.com" },
]

app.get("/",(req,res)=>{
    res.send("<h1>hello World !!!</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Page !!!</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page!!!</h1>")
})


app.get("/users",(req,res)=>{
    res.json(users)
})

app.listen(PORT,()=>console.log("server is running on 3000"))