import { UsersListService } from "../sevices/UsersListService.js";

class UsersListController {
  async handle(req, res) {
    const userListService = new UsersListService();
    const userList = await userListService.execute();


    return res.json(userList);
  }
}

export { UsersListController };
