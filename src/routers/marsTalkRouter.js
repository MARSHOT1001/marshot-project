import express from "express";
import {
  chats,
  friends,
  marsTalk,
  more,
  shopping,
  views,
} from "../controllers/marsTalkController";

const marsTalkRouter = express.Router();

marsTalkRouter.get("/", marsTalk);
marsTalkRouter.get("/:id/friends", friends);
marsTalkRouter.get("/:id/chats", chats);
marsTalkRouter.get("/:id/views", views);
marsTalkRouter.get("/:id/shopping", shopping);
marsTalkRouter.get("/:id/more", more);

export default marsTalkRouter;
