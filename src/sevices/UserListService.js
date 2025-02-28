class UserListService {
  async execute(userData) {
    let usersList = [];

    for (let user of userData) {
      usersList = [...usersList, { _id: user._id, username: user.username }];
    }

    return usersList;
  }
}

export { UserListService };
