import { clearData } from "../../database/firebase.js";
import { NewUserService } from "../sevices/NewUserService.js";
import { randomUUID } from "crypto";
class NewUserController {
  async handle(req, res) {
    const { username } = req.body;
    const userData = req.usersKeys;
    const _id = randomUUID();

    // Impedindo que o usuário salve mais do que 4 users
    if (userData !== undefined && userData.length > 15) {
      clearData();
      return res.json({
        erro: "Já tem 15 users salvos. Dados excluidos com sucesso",
      });
    }

    const newUserService = new NewUserService();
    const newUser = await newUserService.execute({ _id, username });

    return res.json(newUser);
  }
}

export { NewUserController };
