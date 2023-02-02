import express, { application } from "express";
import {
  getSignin,
  getSignup,
  postSignin,
  postSignup,
} from "../controllers/userController";
import { freedom } from "../controllers/freedomController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", freedom);
rootRouter
  .route("/signup")
  .all(publicOnlyMiddleware)
  .get(getSignup)
  .post(postSignup);
rootRouter
  .route("/signin")
  .all(publicOnlyMiddleware)
  .get(getSignin)
  .post(postSignin);

export default rootRouter;
