class NewExerciseService {
  async execute(exercise) {
    const { _id, description, durationInt: duration, resDate: date, username } = exercise;

    return {
      _id,
      username,
      description,
      duration,
      date,
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
