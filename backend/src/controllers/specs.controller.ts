import type { Request, Response } from "express";
import {
  createSpecs,
  getSpecsByCar,
  getCarWithSpecs,
} from "../services/specs.service";

type CarParams = {
  id: string;
};

export const create = async (req: Request<CarParams>, res: Response) => {
  const specs = await createSpecs(req.params.id, req.body);
  return res.status(201).json(specs);
};

export const getByCar = async (req: Request<CarParams>, res: Response) => {
  const specs = await getSpecsByCar(req.params.id);
  return res.json(specs);
};

export const getCarDetails = async (req: Request<CarParams>, res: Response) => {
  const car = await getCarWithSpecs(req.params.id);
  return res.json(car);
};
