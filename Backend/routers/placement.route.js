import {Router} from "express";
import {uploadPlacementData, getPlacementData,getFilterPlacementData, deleteAllPlacementData } from "../controllers/placement.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";


const placementRoute=Router()

placementRoute.get("/",getPlacementData);
placementRoute.post("/filter",getFilterPlacementData);
placementRoute.delete("/delete-all",deleteAllPlacementData);
placementRoute.post("/upload",uploadExcelSheet.single('placementData'),uploadPlacementData);

export default placementRoute;
