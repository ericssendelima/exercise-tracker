class LogsListService {
  async execute({user, from, to, limit }) {

    const userDisplayed = {
      username: user[0].username,
      count: user[0].count,
      _id: user[0]._id,
      log: user[0].log
    }
    return userDisplayed
  }
}

export { LogsListService };

/*FORMATO DE SAÍDA

GET user's exercise log: GET /api/users/:_id/logs?[from][&to][&limit]

[ ] = optional

from, to = dates (yyyy-mm-dd); limit = number

{
    "_id": "67c0eedd37461200132773a9",
    "username": "ericssen",
    "count": 2,
    "log": [
        {
            "description": "56I6H8INURTBYHDGFV",
            "duration": 12,
            "date": "Thu Feb 27 2025"
        },
        {
            "description": "VFSD6HERTDFSV",
            "duration": 2323,
            "date": "Thu Feb 27 2025"
        }
    ]
}

*/
