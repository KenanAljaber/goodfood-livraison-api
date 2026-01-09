import { Router } from "express"
import create from "./create.js";
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World from delivery driver!");
});

router.post("/", create);

export default router