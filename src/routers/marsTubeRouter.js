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
marsTubeRouter.get("/:id", watch);
marsTubeRouter.get("/:id/edit", edit);
marsTubeRouter.get("/upload", upload);
marsTubeRouter.get("/:id/delete", deleteVideo);
marsTubeRouter.get("/search", search);

export default marsTubeRouter;
