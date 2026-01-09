import { Router } from "express"
const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World from delivery!");
});


router.get("/test", (req, res) => {
    res.send("test");
});

export default router