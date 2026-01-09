import { configDotenv } from "dotenv";
configDotenv({ path: "./.env.dev"} );
import express from "express";
import { connectMongo } from "./src/db.js";
import routes from "./src/routes.js";
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectMongo(process.env.MONGO_URL);
const port = process.env.PORT || 3000;

routes(router);
app.use("/api/v1",router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});