export const databaseUsers = (req, res, next) => {
  const data = req.cookies;
  const users = Object.values(data);
  const usersValues = [];
  const usersId = Object.keys(data);

  for (let user of users) {
    usersValues.push(JSON.parse(user));
  }

  req.usersValues = usersValues;
  req.usersId = usersId;
  
  next()
};

