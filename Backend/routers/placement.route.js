import {Router} from "express";
import {uploadPlacementData, getPlacementData, deleteAllPlacementData } from "../controllers/placement.controller.js";


const placementRoute=Router()

placementRoute.get("/",getPlacementData);
placementRoute.delete("/delete-all",deleteAllPlacementData);
placementRoute.post("/upload",uploadExcelSheet.single('placementData'),uploadPlacementData);



export default placementRoute;
