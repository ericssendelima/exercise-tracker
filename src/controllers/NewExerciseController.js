import { setNewData } from "../../database/firebase.js";
import { NewExerciseService } from "../sevices/NewExerciseService.js";

class NewExerciseController {
  async handle(req, res) {
    let { [":_id"]: _id, description, duration, date } = req.body;
    if (_id === undefined) {
      _id = req.params._id;
      
    }

    const usersValues = req.usersValues;
    
    const user = usersValues.filter((user) => {
      return user._id === _id;
    });

    //VALIDAR SE TODOS OS DADOS OBRIGATÓRIOS ESTÃO SENDO RECEBIDOS:
    //_id, description e duration
    if (user.length < 1) {
      return res.json({ erro: "Este usuário não existe!" });
    }

    if (description === "" || duration === "") {
      return res.json({ erro: "Parâmetro(s) do exercício faltando!" });
    }

    //Se não tiver exercício salvo, "user.log.length" vai retornar "undefined", nesse caso, armazena "0" em count
    //Caso contrário, armazena em count, quantos exercícios salvos tem
    let count = user[0].log[0] === "" ? 0 : user[0].log.length;
    count++;
    const durationInt = parseInt(duration);

    //Lançar erro para não salvar mais de 3 exercicios
    if (count === 15) {
      return res.json({
        error: "Mais de 15 exercícios salvos",
      });
    }

    //LÓGICA PARA VERIFICAR SE RECEBEU UMA DATA. SE NÃO, ENVIA A DATA ATUAL DA REQUISIÇÃO - "Thu Feb 27 2025" - nesse formato
    let resDate = "";
    if (date) {
      const atualDate = new Date(date);
      resDate = atualDate.toDateString();
    } else {
      const atualDate = new Date();
      resDate = atualDate.toDateString();
    }
    const newLog = {
      description,
      duration: durationInt,
      date: resDate,
    };

    const finalLog =
      user[0].log[0] === "" ? [newLog] : [...user[0].log, newLog];

    const dataUser = {
      _id,
      username: user[0].username,
      count,
      log: finalLog,
    };

    setNewData(_id, dataUser);

    const newExerciseService = new NewExerciseService();
    const newExercise = await newExerciseService.execute({
      _id,
      description,
      durationInt,
      resDate,
      username: user[0].username,
    });

    return res.send(newExercise);
  }
}

export { NewExerciseController };
