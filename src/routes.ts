import { Router } from "express";

//Controllers
import { UserController } from "./controllers";

//middlewares

const routes = Router();

// Routes

routes.use("/users", UserController);

export default routes;
