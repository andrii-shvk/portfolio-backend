import { Router } from "express";
import UserController from "../controllers/user.controller";

const userController = new UserController();
const userRouter = Router();

userRouter.post("/", userController.createProject);
userRouter.get("/all", userController.getAllProjects);
userRouter.get("/:filter", userController.getProjectsByFilter);
userRouter.put("/", userController.updateProject);
userRouter.delete("/:id", userController.deleteProject);

export default userRouter;
