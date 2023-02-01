import express from "express";
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

const marsTubeRouter = express.Router();

marsTubeRouter.get("/", marstube);
marsTubeRouter.get("/:id([0-9a-f]{24})", watch);
marsTubeRouter.route("/upload").get(getUpload).post(postUpload);
marsTubeRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
marsTubeRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);
marsTubeRouter.get("/search", search);

export default marsTubeRouter;
