import { Router } from "express";
import * as CarController from "../controllers/car.controller";
import * as SpecsController from "../controllers/specs.controller";

const router = Router();

router.post("/", CarController.create);
router.get("/", CarController.list);
router.post("/:id/specs", SpecsController.create);
router.get("/:id/specs", SpecsController.getByCar);
router.get("/:id/details", SpecsController.getCarDetails);
router.get("/:id", CarController.getById);
router.put("/:id", CarController.update);
router.delete("/:id", CarController.remove);

export default router;
