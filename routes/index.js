import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.send("Api Root"));

export default router;
