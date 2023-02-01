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
marsTalkRouter.get("/:id(\\d+)/friends", friends);
marsTalkRouter.get("/:id(\\d+)/chats", chats);
marsTalkRouter.get("/:id(\\d+)/views", views);
marsTalkRouter.get("/:id(\\d+)/shopping", shopping);
marsTalkRouter.get("/:id(\\d+)/more", more);

export default marsTalkRouter;
