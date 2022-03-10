import express from "express";
import {edit,deleteUser, logout, see} from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get(":id", see);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteUser);

export default userRouter;