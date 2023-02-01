import express, { application } from "express";
import { freedom } from "../controllers/freedomController";

const rootRouter = express.Router();

rootRouter.get("/", freedom);

export default rootRouter;
