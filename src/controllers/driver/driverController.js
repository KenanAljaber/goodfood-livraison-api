import { Router } from "express"
import create from "./create.js";
import availableDriver from "./availableDriver.js";
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World from delivery driver!");
});

router.get("/availableDriver",availableDriver) 

router.post("/", create);

export default router