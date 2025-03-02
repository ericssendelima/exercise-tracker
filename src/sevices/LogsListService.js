class LogsListService {
  async execute({user, from, to, limit }) {
    let logDisplayed = user[0].log
    if(limit > 0){
      logDisplayed = user[0].log.splice(0, limit)
    }
    
    const userDisplayed = {
      username: user[0].username,
      count: user[0].count,
      _id: user[0]._id,
      log: logDisplayed
    }
    return userDisplayed
  }
}

export { LogsListService };

/*FORMATO DE SAÍDA

GET user's exercise log: GET /api/users/:_id/logs?[from][&to][&limit]

[ ] = optional

from, to = dates (yyyy-mm-dd); limit = number

*/
