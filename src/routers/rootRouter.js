import express, { application } from "express";
import { freedom } from "../controllers/freedomController";
import { getSignup, postSignup, signin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", freedom);
rootRouter.route("/signup").get(getSignup).post(postSignup);
rootRouter.get("/signin", signin);

export default rootRouter;
