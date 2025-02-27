import {Router} from "express";
import { uploadGateData, getGateData ,deleteAllgateData} from "../controllers/gate.controller.js";
import uploadExcelSheet from "../middlewares/excel.middleware.js";

const gateRoute=Router()

gateRoute.get("/",getGateData);
gateRoute.delete("/delete-all",deleteAllgateData);
gateRoute.post("/upload",uploadExcelSheet.single('gateData'),uploadGateData);



export default gateRoute;