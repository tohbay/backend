import { Router } from "express";
import DataController from "../controllers/data";

const router = Router();

router.post("/", DataController.create);
router.post("/json", DataController.create);
router.post("/xml", DataController.create);
router.get("/all", DataController.getAll);

export default router;
