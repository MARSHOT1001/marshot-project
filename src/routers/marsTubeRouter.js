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
import { protectorMiddleware, videoUpload } from "../middlewares";

const marsTubeRouter = express.Router();

marsTubeRouter.get("/", marstube);
marsTubeRouter.get("/:id([0-9a-f]{24})", watch);
marsTubeRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
marsTubeRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
marsTubeRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(videoUpload.single("video"), postUpload);
marsTubeRouter.get("/search", search);

export default marsTubeRouter;
