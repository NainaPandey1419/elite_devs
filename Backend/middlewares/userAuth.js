import User from "../models/user.model.js";
import ApiError from "../utills/error.utills.js"
import jwt from "jsonwebtoken"

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return next(new ApiError(401, "Unauthorized Access"));
        }
        // Verify the token
        const userDetail =await jwt.verify(token, process.env.JWT_SECRET);
        // Attach user details to the request object
        req.user = userDetail;
        next();
    } catch (error) {
        return next(new ApiError(401, "Invalid or Expired Token"));
    }
};


const authrizedRoll= (...roles)=> async (req,res,next)=>{
       const currentUserRole=req.user.role ;   
       if (!roles.includes(currentUserRole)) {
           return next(new ApiError(400, "You do not have Permision Access this route"));              
       }
       next()
    };



export  {isLoggedIn,authrizedRoll};
    