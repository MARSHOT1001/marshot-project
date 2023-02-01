import express from "express";
import { see, signin, signout, signup } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/signin", signin);
userRouter.get("/signup", signup);
userRouter.get("/signout", signout);
userRouter.get("/:id", see);

export default userRouter;
