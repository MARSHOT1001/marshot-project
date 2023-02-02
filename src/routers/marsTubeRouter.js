import express from "express";
import { removeAllListeners } from "nodemon";
import {
  deleteVideo,
  getEdit,
  postEdit,
  marstube,
  search,
  watch,
  getUpload,
  postUpload,
} from "../controllers/marsTubeController";
import { publicOnlyMiddleware } from "../middlewares";

const marsTubeRouter = express.Router();

marsTubeRouter.get("/", marstube);
marsTubeRouter.get("/:id([0-9a-f]{24})", watch);
marsTubeRouter
  .route("/upload")
  .all(publicOnlyMiddleware)
  .get(getUpload)
  .post(postUpload);
marsTubeRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(publicOnlyMiddleware)
  .get(getEdit)
  .post(postEdit);
marsTubeRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(publicOnlyMiddleware)
  .get(deleteVideo);
marsTubeRouter.get("/search", search);

export default marsTubeRouter;
