import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import { routes } from "./router.js";

const app = express();

app.use(cookieParser())
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Middleware para capturar rotas não encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    status: 404
  });
});

const listener = app.listen(process.env.PORT || 3033, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
