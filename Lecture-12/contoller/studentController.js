const students=require("../data/studentData")

const getStudents=(req,res)=>{
    res.json(students)
}

const getStudentById=(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    res.json(student);
}

const createStudent=(req,res)=>{
    const data=req.body;
    students.push({rollNo:students.length+1,...data});
    res.json({success:true,data});
}

const updateStudent=(req,res)=>{
    const id=req.params.rollNo;
    const data=req.body;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    student.name=data.name;
    student.section=data.section;
    res.json({success:true,student});
}

const deleteStudent=(req,res)=>{
    const id=req.params.rollNo;
    const studentIndex=students.findIndex((student)=>student.rollNo===Number(id));
    if(studentIndex===-1){
        res.status(404).json({success:false, message:"student not found"});
    }else{
        students.splice(studentIndex,1);
        res.json({success:true, message:"student deleted successfully"});
    }
    
}

module.exports={
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}