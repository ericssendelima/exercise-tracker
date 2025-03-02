import { UserListService } from "../sevices/UserListService.js";

class UsersListController {
  async handle(req, res) {
    const usersValues = req.usersValues;

    const userListService = new UserListService();
    const userList = await userListService.execute(usersValues);

    return res.send(userList);
  }
}

export { UsersListController };
