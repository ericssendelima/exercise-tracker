class NewExerciseService {
  async execute(exercise) {
    const { _id, description, duration, date, username } = exercise;
    //ESSE username TEM QUE VIR DO DB E NÃO DA REQUISIÇÃO.
    //COM O _id, TEMOS QUE BUSCAR O username NO DB PRA PODER EXIBI-LO

    const user = username ? username : "Falta buscar do db";
    const resDate = date ? date : "Falta gerar a data atual"

    return {
      _id,
      username: user,
      description: "FALTA FAZER A VALIDAÇÃO DOS DADOS OBRIGATÓRIOS LA NO CONTROLLER DO NEWEXERCISE. APÓS CORRIGIR ISTO, RETIRAR ESTA STRING DO DESCRIPTION NO SERVICE DE NEWEXERCISE, VOLTANDO A EXIBIR O DESCRIPTION PASSADO PELO USUÁRIO",
      duration,
      date: resDate,
    };
  }
}

export { NewExerciseService };

/* ESTRUTURA DA RESPOSTA

{
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}

*/
