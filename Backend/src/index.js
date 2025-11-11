import express  from "express";
import morgan from "morgan";

import userRouter from "./user/user.routes.js";

const app = express();

app.listen(3030 ,()=>console.log("Server is running "));


//app level middleware


app.use(morgan('dev'));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/user",userRouter);
