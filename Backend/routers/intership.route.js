import {Router} from "express";
import {uploadInternshipData,getInternshipData,deleteAllInternshipData} from "../controllers/internship.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const intershipRoute=Router()

intershipRoute.get("/",getInternshipData);
intershipRoute.delete("/delete-all",deleteAllInternshipData);

intershipRoute.post("/upload",uploadExcelSheet.single('internshipData'),uploadInternshipData);



export default intershipRoute;