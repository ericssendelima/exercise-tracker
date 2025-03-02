import { LogsListService } from "../sevices/LogsListService.js";

class LogsListController {
  async handler(req, res) {
    const { from, to, limit } = req.query;
    const { _id } = req.params;

    const usersValues = req.usersValues;

    const user = usersValues.length < 1 ? null : usersValues.filter((user) => {
      return user._id === _id;
    });

    //Verificando se o id passado pertence a algum usuário salvo
    if (user.length < 1) {
      return res.json({ erro: "Este usuário não existe!", _id });
    }

    const logsListService = new LogsListService();
    const logsList = await logsListService.execute({ from, to, limit, user });

    return res.json(logsList);
  }
}

export { LogsListController };

/*

https://exercise-tracker-z7yi.onrender.com/api/users/6f652d01-01ae-4fb3-919c-af048d8489c9/logs?from=1989-12-31&to=1990-01-04

GET user's exercise log: GET /api/users/:_id/logs?[from][&to][&limit]

[ ] = optional

from, to = dates (yyyy-mm-dd); limit = number

*/
