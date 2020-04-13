import { Router } from "express";
import DataController from "../controllers/data";

const router = Router();

router.post("/api/v1/on-covid-19", DataController.create);
router.post("/api/v1/on-covid-19/json", DataController.create);
router.post("/api/v1/on-covid-19/xml", DataController.create);
router.get("/all", DataController.getAll);

export default router;
