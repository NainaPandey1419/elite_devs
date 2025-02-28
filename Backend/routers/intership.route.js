import {Router} from "express";
import {uploadInternshipData,getInternshipData,deleteAllInternshipData} from "../controllers/internship.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const intershipRoute=Router()

intershipRoute.get("/",getInternshipData);
intershipRoute.delete("/delete-all",deleteAllInternshipData);

intershipRoute.post("/upload",uploadExcelSheet.single('internshipData'),(req,res,next)=>{
    console.log("I am in intership route")
    console.log(req.body?.intershipData)
    console.log(req.file?.['intershipData'])
    next();
},uploadInternshipData);

export default intershipRoute;