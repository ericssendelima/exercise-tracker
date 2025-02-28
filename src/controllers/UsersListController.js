import { UserListService } from "../sevices/UserListService.js";

class UsersListController {
  async handle(req, res) {
    const userData = req.usersValues;
    const userListService = new UserListService();
    const userList = await userListService.execute(userData)

    return res.json(userList);
  }
}

export { UsersListController };
