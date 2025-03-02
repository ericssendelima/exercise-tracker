class testeController {
  async handle(req, res) {
    const userData = req.usersKeys

    // const values = req.usersValues
    console.log(userData.length);

    res.json({ ok: true });
  }
}

export { testeController };
