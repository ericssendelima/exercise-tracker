import { ref, get, db } from "../../database/firebase.js";

export const GetDatabaseUsers = async (req, res, next) => {
  const database = [];

  await get(ref(db, "/tracker/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        req.usersValues = Object.values(snapshot.val());
        req.usersKeys = Object.keys(snapshot.val());
        
        next();
      } else {
        if (req.method === "GET") {
          console.log("No data available");
          res.json({ erro: "Não há dados salvos!" });
        } else if (req.method === "POST") {
          next();
        } else {
          console.log("A requisição não foi GET nem POST, foi: " + req.method);
          res.json({ erro: req.method });
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
