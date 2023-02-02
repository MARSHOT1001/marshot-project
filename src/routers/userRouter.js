import express from "express";
import { profile, signout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id/signout", signout);
userRouter.get("/:id", profile);

export default userRouter;
