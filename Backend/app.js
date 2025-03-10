import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routers/user.route.js"
import errorMiddleware from "./middlewares/error.middlewares.js";
import intershipRoute from "./routers/intership.route.js"
import gateRoute from "./routers/gate.route.js"
import catRoute from "./routers/cat.route.js";
import placementRoute from "./routers/placement.route.js";
import researchPaperRoute from "./routers/researchPaperPublication.route.js";
import aiRoutes from "./routers/ai.routes.js";
import nptelRoute from "./routers/nptel.route.js";


const app=express();
app.use(express.json());
app.use(cookieParser());


const corsOptions = {
  origin:"http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

// Use CORS Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true,limit:"16kb"}));



app.use("/api/v1/ai/", aiRoutes);
app.use("/api/v1/user",userRoute);
app.use("/api/v1/intership",intershipRoute);
app.use("/api/v1/gate",gateRoute);
app.use("/api/v1/cat",catRoute);
app.use("/api/v1/placement",placementRoute);
app.use("/api/v1/research",researchPaperRoute);
app.use("/api/v1/nptel",nptelRoute);


app.use("/",(req,res)=>{
  res.send("Hey I am rohan malakar")   
});


app.all("*",(req,res,next)=>{
      res.status(404)
      res.send("OOPS! page not found")   
});

app.use(errorMiddleware)



export default app;

