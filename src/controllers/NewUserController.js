import { randomUUID } from "crypto";

import { NewUserService } from "../sevices/NewUserService.js";

class NewUserController {
  async handle(req, res) {
    const { username } = req.body;
    const _id =  randomUUID();

    const newUserService = new NewUserService();
    const newUser = await newUserService.execute({ _id, username });

    return res.json(newUser);
  }
}

export { NewUserController };
