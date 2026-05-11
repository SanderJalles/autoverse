import { Router } from "express";
import * as CarController from "../controllers/car.controller";

const router = Router();

router.post("/", CarController.create);
router.get("/", CarController.list);
router.get("/:id", CarController.getById);
router.put("/:id", CarController.update);
router.delete("/:id", CarController.remove);

export default router;
