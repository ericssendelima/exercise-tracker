import { NewExerciseService } from "../sevices/NewExerciseService.js";

class NewExerciseController {
  async handle(req, res) {
    const { [":_id"]: _id, description, duration, date } = req.body;
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
      return res.json({ erro: "Parâmetro(s) do exercício faldando!" });
    }

    //Se não tiver exercício salvo, "user.log.length" vai retornar "undefined", nesse caso, armazena "0" em count
    //Caso contrário, armazena em count, quantos exercícios salvos tem
    let count = !user[0].log ? 0 : user[0].log.length;
    count++;
    const durationInt = parseInt(duration);

    //Lançar erro para não salvar mais de 3 exercicios
    if (count === 4) {
      res.clearCookie("teste");
      return res.json({
        error: "Mais de 3 exercícios salvos",
        msg: "Usuário excluído!",
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

    const dataUser = {
      _id,
      username: user[0].username,
      count,
      log: [...user[0].log, newLog],
    };

    const newExerciseService = new NewExerciseService();
    const newExercise = await newExerciseService.execute({
      _id,
      description,
      durationInt,
      resDate,
      username: user[0].username,
    });

    res.cookie(_id, JSON.stringify(dataUser), {
      maxAge: 1000 * 60 * 60 * 24, // Duração de 1 dia
      httpOnly: true, // O cookie só pode ser acessado pelo backend
    });


    return res.json(newExercise);
  }
}

export { NewExerciseController };
