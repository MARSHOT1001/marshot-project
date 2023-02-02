import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import marsTalkRouter from "./routers/marsTalkRouter";
import marsTubeRouter from "./routers/marsTubeRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/marstalk", marsTalkRouter);
app.use("/marstube", marsTubeRouter);

export default app;
