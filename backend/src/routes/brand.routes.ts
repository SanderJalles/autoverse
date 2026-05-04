import { Router } from "express";
import * as BrandController from "../controllers/brand.controller";

const router = Router();

router.post("/", BrandController.create);
router.get("/", BrandController.list);
router.get("/:id", BrandController.getById);
router.delete("/:id", BrandController.remove);

export default router;