import { initializeApp } from "firebase/app";
import { getDatabase, remove, ref, get, set } from "firebase/database";
import "dotenv/config";

const firebaseConfig = {
  apiKey: process.env.EIPI_CH,
  authDomain: process.env.AUTH_DM,
  databaseURL: process.env.DB_NDR,
  projectId: process.env.PJT_DDD,
  storageBucket: process.env.LOCAL_ARM,
  messagingSenderId: process.env.MSG_SDDD,
  appId: process.env.A_DDD,
  measurementId: process.env.MEAN_DDD,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const setNewData = (userKeydb, data) => {
  set(ref(db, `/tracker/${userKeydb}`), data)
    .then(() => {
      return console.log("Salvo com sucesso!");
    })
    .catch((err) => console.log(err));
};


const clearData = () => {
  remove(ref(db, "/tracker/"))
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { db, ref, get, set, setNewData ,clearData };
