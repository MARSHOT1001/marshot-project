import express, { application } from "express";
import { freedom } from "../controllers/freedomController";
import { signin, signup } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", freedom);
rootRouter.get("/signup", signup);
rootRouter.get("/signin", signin);

export default rootRouter;
