import multer from "multer";
import {Router} from "express";
import {register,login,logout,profile} from "../controllers/user.controllers.js"
import {isLoggedIn} from "../middlewares/userAuth.js"
import upload from "../middlewares/multer.middleware.js"
const userRoute=Router()

userRoute.post("/register",upload.single('avatar'),register)
userRoute.post("/login",login)
userRoute.get("/logout",logout)
userRoute.get("/profile",isLoggedIn,profile)


export default userRoute;