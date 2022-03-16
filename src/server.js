import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalrouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const port  = 4000;

//express application을 만드는게 첫번째 규칙
const app = express();
const logger = morgan("dev"); 

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.urlencoded({extended: true}));
app.use("/",globalRouter)
app.use("/video", videoRouter)
app.use("/user", userRouter)


const handleListening = () => console.log(`Server Listening on port http://localhost:${port}`);

app.listen(port, handleListening)
