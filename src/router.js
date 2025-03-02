import { Router } from "express";
import path from "path";

//Controllers
import { NewUserController } from "./controllers/NewUserController.js";
import { UsersListController } from "./controllers/UsersListController.js";
import { NewExerciseController } from "./controllers/NewExerciseController.js";
import { LogsListController } from "./controllers/LogsListController.js";
import { testeController } from "./controllers/testeController.js";
import { LimparDados } from "./controllers/LimparDados.js";

//Middlewares
import { GetDatabaseUsers } from "./middlewares/GetDatabaseUsers.js";

const routes = Router();

//Requisições GET
routes.get("/", (req, res) => {
  const __dirname = path.resolve();
  return res.sendFile(__dirname + "/views/index.html");
}); //Homepage

routes.get("/api/users", GetDatabaseUsers, new UsersListController().handle); //Lista de usuários
routes.get("/api/users/:_id/logs", GetDatabaseUsers, new LogsListController().handler); //Logs de um usuário especifico
routes.get("/limpar-dados", new LimparDados().handle); //Limpa todos os dados
// routes.get("/teste/:_id", new testeController().handle); //Logs de um usuário especifico
routes.get("/teste", GetDatabaseUsers, new testeController().handle); //Logs de um usuário especifico

//Requisições POST
routes.post("/api/users", GetDatabaseUsers, new NewUserController().handle); //cria um novo usuário
routes.post("/api/users/:_id/exercises", GetDatabaseUsers, new NewExerciseController().handle); //cria um novo exercício de um novo usuário

export { routes };
