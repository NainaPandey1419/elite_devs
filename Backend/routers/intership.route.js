import {Router} from "express";
import {uploadInternshipData,getInternshipData,deleteAllInternshipData,getFilterInternShip } from "../controllers/internship.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";


const intershipRoute=Router()


intershipRoute.post("/filter",getFilterInternShip);

intershipRoute.get("/",getInternshipData);


intershipRoute.delete("/delete-all",deleteAllInternshipData);

intershipRoute.post("/upload",(req,res,next)=>{
    console.log("I am in intership route 1")
    next();

},uploadExcelSheet.single('intershipData'),(req,res,next)=>{
    console.log(req.file);
    console.log("I am in intership route 2")
    next();
},uploadInternshipData);


export default intershipRoute;