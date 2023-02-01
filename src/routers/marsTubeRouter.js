import express from "express";
import {
  deleteVideo,
  getEdit,
  postEdit,
  marstube,
  search,
  upload,
  watch,
} from "../controllers/marsTubeController";

const marsTubeRouter = express.Router();

marsTubeRouter.get("/", marstube);
marsTubeRouter.get("/:id(\\d+)", watch);
marsTubeRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
marsTubeRouter.get("/:id(\\d+)/delete", deleteVideo);
marsTubeRouter.get("/search", search);
marsTubeRouter.get("/upload", upload);

export default marsTubeRouter;
