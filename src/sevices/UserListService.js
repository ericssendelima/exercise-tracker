class UserListService {
  async execute(userData) {
    let usersList = [];

    for (let user of userData) {
      usersList = [...usersList, { username: user.username, _id: user._id }];
    }

    return usersList;//retorna um array de objetos
  }
}

export { UserListService };
