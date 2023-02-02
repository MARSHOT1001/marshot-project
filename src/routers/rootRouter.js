import express, { application } from "express";
import { freedom } from "../controllers/freedomController";
import {
  getSignin,
  getSignup,
  postSignin,
  postSignup,
} from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", freedom);
rootRouter.route("/signup").get(getSignup).post(postSignup);
rootRouter.route("/signin").get(getSignin).post(postSignin);

export default rootRouter;
