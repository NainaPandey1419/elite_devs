import {Router} from "express";
import {uploadInternshipData,getInternshipData} from "../controllers/internship.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const intershipRoute=Router()

intershipRoute.get("/",getInternshipData);
intershipRoute.post("/upload",uploadExcelSheet.single('internshipData'),uploadInternshipData);

export default intershipRoute;