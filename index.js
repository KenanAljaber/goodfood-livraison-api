import { configDotenv } from "dotenv";
configDotenv({ path: "./.env.dev"} );
import express from "express";
import { connectMongo } from "./src/db.js";
const app = express();

connectMongo(process.env.MONGO_URL);
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});