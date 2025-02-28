import {Router} from "express";
import { uploadCatData, getCatData,deleteAllCatData } from "../controllers/cat.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const catRoute=Router()

catRoute.get("/",getCatData);
catRoute.delete("/delete-all",deleteAllCatData);
catRoute.post("/upload",uploadExcelSheet.single('catData'),uploadCatData);

export default catRoute;