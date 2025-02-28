import { randomUUID } from "crypto";

import { NewUserService } from "../sevices/NewUserService.js";

class NewUserController {
  async handle(req, res) {
    const { username } = req.body;
    const _id = randomUUID();
    const cookieStr = _id;
    const userData = req.usersId;
    
    //Impedindo que o usuário salve mais do que 4 users
    if(userData.length > 4){
      return res.json({erro: "Já tem 4 users salvos. Não tem mais espaço"})
    }

    const newUserService = new NewUserService();
    const newUser = await newUserService.execute({ _id, username });
    try {
      res.cookie(cookieStr, JSON.stringify(newUser), {
        maxAge: 1000 * 60 * 60 * 24, // Duração de 1 dia
        httpOnly: true, // O cookie só pode ser acessado pelo backend
      });
      return res.json({_id, username});
    } catch (error) {
      console.log(error);
      return { erro: "algo deu errado" };
    }
  }
}

export { NewUserController };
