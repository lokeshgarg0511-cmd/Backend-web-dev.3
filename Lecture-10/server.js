const express=require("express")
const app=express();
const PORT = 3000;

const students=[
    {rollNo:1, name:"lokesh", section:"BCA-D"},
    {rollNo:2, name:"siya", section:"BCA-D"},
    {rollNo:3, name:"rohit", section:"BCA-D"},
    {rollNo:4, name:"rahul", section:"BCA-D"},
    {rollNo:5, name:"anshika", section:"BCA-D"},
    {rollNo:6, name:"ankur", section:"BCA-D"}
]
// //// read operation 
app.get("/students",(req,res)=>{
    res.json(students)
})
// /// read operation with id
app.get("/students/:rollNo",(req,res)=>{
    const id=req.parans.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    res.json(students);
})

app.listen(PORT,()=>console.log("server is running "));