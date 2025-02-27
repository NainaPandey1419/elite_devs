import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routers/user.route.js"
import errorMiddleware from "./middlewares/error.middlewares.js";


const app=express();
app.use(express.json());
app.use(cookieParser());


const corsOptions = {
  origin:"http://localhost:5174",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

// Use CORS Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true,limit:"16kb"}));



app.use("/api/v1/user",userRoute);


app.use("/",(req,res)=>{
  res.send("Hey I am rohan malakar")   
});


app.all("*",(req,res,next)=>{
      res.status(404)
      res.send("OOPS! page not found")   
});

app.use(errorMiddleware)



export default app;

