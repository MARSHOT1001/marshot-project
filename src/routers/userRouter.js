import express from "express";
import { profile, signout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/signout", signout);
userRouter.get("/:id", profile);

export default userRouter;
