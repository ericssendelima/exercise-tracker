import { Router } from "express";

//Controllers
import { NewUserController } from "./controllers/NewUserController.js";
import { UsersListController } from "./controllers/UsersListController.js";
import { HomepageServerController } from "./controllers/HomePageServerController.js";
import { NewExerciseController } from "./controllers/NewExerciseController.js";

const routes = Router();

//Requisições GET
routes.get("/", new HomepageServerController().handle);
routes.get("/api/users", new UsersListController().handle);

//Requisições POST
routes.post("/api/users", new NewUserController().handle)
routes.post("/api/users/:_id/exercises", new NewExerciseController().handle)

export { routes };
