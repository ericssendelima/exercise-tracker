class NewUserService {
  async execute({ _id, username }) {
    const count = 0;
    const log = [];
    //FALTA FAZER A CONEXÃO COM O BANCO
    const teste = {
      _id,
      username,
      log,
    };
    return { _id, username, count, log };
  }
}

export { NewUserService };
