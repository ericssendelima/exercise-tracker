import { NewExerciseService } from "../sevices/NewExerciseService.js";

class NewExerciseController {
  async handle(req, res) {
    const { [":_id"]: _id, description, duration, date, username } = req.body;
     //ESSE username TEM QUE VIR DO DB E NÃO DA REQUISIÇÃO. 


     //VALIDAR SE TODOS OS DADOS OBRIGATÓRIOS ESTÃO SENDO RECEBIDOS:
     //_id, description e duration
     
    const newExerciseService = new NewExerciseService();
    const newExercise = await newExerciseService.execute({
      _id,
      description,
      duration,
      date,
      username
    });
     //ESSE username TEM QUE VIR DO DB E NÃO DA REQUISIÇÃO. 


    //CRIAR LÓGICA PARA VERIFICAR SE RECEBEU UMA DATA. SE NÃO, ENVIAR A DATA ATUAL DA REQUISIÇÃO - "Thu Feb 27 2025" - nesse formato

    return res.json(newExercise)
  }
}

export { NewExerciseController };
