import {Router} from "express";
import {  uploadResearchPaperData,getFilterResearchData, getResearchPaperData, deleteAllResearchPaperData} from "../controllers/researchPaperPublication.controller.js ";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const researchPaperRoute=Router()

researchPaperRoute.get("/",getResearchPaperData);
researchPaperRoute.post("/filter",getFilterResearchData);
researchPaperRoute.delete("/delete-all",deleteAllResearchPaperData);
//researchPaperRoute.post("/upload",uploadExcelSheet.single('researchData'),uploadResearchPaperData);

researchPaperRoute.post("/upload",(req,res,next)=>{
  console.log("I am in intership route 1")
  next();
},uploadExcelSheet.single('researchData'),(req,res,next)=>{
  console.log(req.file);
  console.log("I am in intership route 2")
  next();
},uploadResearchPaperData);



export default researchPaperRoute;