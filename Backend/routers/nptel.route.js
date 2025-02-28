import {Router} from "express";
import {uploadNptelData, getNptelData, deleteAllNptelData} from "../controllers/nptel.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const nptelRoute=Router()

nptelRoute.get("/",getNptelData);
nptelRoute.delete("/delete-all",deleteAllNptelData);

nptelRoute.post("/upload",(req,res,next)=>{
    console.log("I am in nptel route 1")
    next();
},uploadExcelSheet.single('nptelData'),(req,res,next)=>{
    console.log(req.file);
    console.log("I am in nptel route 2")
    next();
},uploadNptelData);

export default nptelRoute;