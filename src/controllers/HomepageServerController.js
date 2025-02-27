import path from "path";

class HomepageServerController {
  async handle(req, res) {
    const __dirname = path.resolve();
    return res.sendFile(__dirname + "/views/index.html");
  }
}

export { HomepageServerController };
