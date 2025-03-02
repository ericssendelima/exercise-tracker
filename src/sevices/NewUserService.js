import { setNewData } from "../../database/firebase.js";

class NewUserService {
  async execute({ _id, username }) {
    const count = 0;
    const log = [""];
    //FALTA FAZER A CONEXÃO COM O BANCO

    try {
      setNewData(_id, {
        username,
        _id,
        count,
        log,
      });
      
      return { username, _id };
    } catch (error) {
      console.log(error);
      return { erro: "algo deu errado" };
    }
  }
}

export { NewUserService };
