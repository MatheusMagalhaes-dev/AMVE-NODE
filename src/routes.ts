import { Router } from "express";

//Controllers
import { UserController } from './controllers';

//middlewares
import { authMiddleware } from '@middlewares';

const routes = Router();

// Routes

routes.use('/users', authMiddleware, UserController);

export default routes;