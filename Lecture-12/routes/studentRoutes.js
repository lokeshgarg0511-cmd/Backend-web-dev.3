const express=require("express")
const router=express.Router();
const studentController=require("../controller/studentController")

router.get("/",studentController.getStudents)
//REad operation with id
router.get("/:rollNo",studentController.getStudentById)

///Create

router.post("/",studentController.createStudent)

//update operation
router.put("/:rollNo",studentController.updateStudent)

router.delete("/:rollNo",studentController.deleteStudent)

module.exports=router