import { Router } from "express";
import * as BrandController from "../controllers/brand.controller";
import * as CarController from "../controllers/car.controller";

const router = Router();

router.post("/", BrandController.create);
router.get("/", BrandController.list);
router.get("/:id/cars", CarController.listByBrand);
router.get("/:id", BrandController.getById);
router.put("/:id", BrandController.update);
router.delete("/:id", BrandController.remove);

export default router;
