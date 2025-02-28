class testeController {
  async handle(req, res) {
    // const { _id } = req.params;
    // const userData = req.cookies.teste;

    // if (userData == undefined) {
    //   return res.json({ erro: "Usuário não existe" });
    // } else {
    //   const user = JSON.parse(userData);
    //   if (_id !== user._id) {
    //     return res.json({ erro: "Id do usuário esta incorreto" });
    //   }
    //   return res.json(user);
    // }
    const keys = req.usersId;
    const values = req.usersValues
    console.log(values);

    res.json({ ok: true });
  }
}

export { testeController };
