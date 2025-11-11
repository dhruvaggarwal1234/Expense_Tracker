import express  from "express";
import morgan from "morgan";

import userRouter from "./user/user.routes.js";
import mongoose from "mongoose"
import dotenv from "dotenv";

import cookieparser from 'cookie-parser';


dotenv.config();

const app = express();

app.listen(3030 ,()=>console.log("Server is running "));

//database connection

mongoose.connect(process.env.DB_URL)
.then(()=> console.log("Database Connected"))
.catch(()=> console.log("Database Connected"));


//Cookie-parser

app.use(cookieparser());

//app level middleware


app.use(morgan('dev'));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/user",userRouter);
