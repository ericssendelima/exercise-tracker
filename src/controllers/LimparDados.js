class LimparDados {
  async handle(req, res) {
    try {
      res.clearCookie("teste");
      return res.json({ ok: "Dados apagados com sucesso!" });
    } catch (error) {
      return res.json({ erro: "Algo deu errado!" });
    }
  }
}

export { LimparDados };
