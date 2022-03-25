import express from "express";
import morgan from "morgan";
import rooteRouter from "./routers/rooteRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";




//express application을 만드는게 첫번째 규칙
const app = express();
const logger = morgan("dev"); 

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended: true}));
app.use("/",rooteRouter)
app.use("/video", videoRouter)
app.use("/user", userRouter)


export default app;
