import express from "express";
import {
  deleteVideo,
  edit,
  marstube,
  search,
  upload,
  watch,
} from "../controllers/marsTubeController";

const marsTubeRouter = express.Router();

marsTubeRouter.get("/", marstube);
marsTubeRouter.get("/:id(\\d+)", watch);
marsTubeRouter.get("/:id(\\d+)/edit", edit);
marsTubeRouter.get("/:id(\\d+)/delete", deleteVideo);
marsTubeRouter.get("/search", search);
marsTubeRouter.get("/upload", upload);

export default marsTubeRouter;
