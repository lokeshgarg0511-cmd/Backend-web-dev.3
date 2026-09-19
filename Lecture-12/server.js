const express= require("express")   
const studentRoutes=require("./routes/studentRoutes")
const app=express();

const PORT=3000

app.use(express.json());//middleware

app.use("/students",studentRoutes);


app.listen(PORT,()=>console.log("server is running"));