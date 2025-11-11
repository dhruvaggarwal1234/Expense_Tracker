import {Router} from "express";
import { login ,createUser } from "./user.controller.js";


const userRouter = Router();

userRouter.post("/signup" , createUser);
userRouter.post("/login" , login);

export default userRouter;