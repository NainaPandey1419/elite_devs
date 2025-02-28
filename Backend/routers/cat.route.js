import {Router} from "express";
import { uploadCatData, getCatData,deleteAllCatData,getFilterCatData } from "../controllers/cat.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const catRoute=Router()

catRoute.get("/",getCatData);
catRoute.post("/filter",getFilterCatData);
catRoute.delete("/delete-all",deleteAllCatData);
catRoute.post("/upload",(req,res,next)=>{
  console.log("I am in cat route 1")
  next();
},uploadExcelSheet.single('catData'),(req,res,next)=>{
  console.log("I am in cat route 2")
  console.log(req.file);
  next();
},uploadCatData);

//catRoute.post("/upload",uploadExcelSheet.single('catData'),uploadCatData);

export default catRoute;