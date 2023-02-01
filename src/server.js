import "./db";
import express from "express";
import morgan from "morgan";
import marsTalkRouter from "./routers/marsTalkRouter";
import marsTubeRouter from "./routers/marsTubeRouter";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/marstalk", marsTalkRouter);
app.use("/marstube", marsTubeRouter);

const handleListening = () =>
  console.log(`Server listening on port: ${PORT}🚀`);

app.listen(PORT, handleListening);
