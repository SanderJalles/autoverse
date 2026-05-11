import type { Request, Response } from "express";
import {
  createCar,
  getCars,
  getCarById,
  getCarsByBrand,
  updateCar,
  deleteCar,
} from "../services/car.service";

type IdParams = {
  id: string;
};

export const create = async (req: Request, res: Response) => {
  const car = await createCar(req.body);
  return res.status(201).json(car);
};

export const list = async (req: Request, res: Response) => {
  const cars = await getCars();
  return res.json(cars);
};

export const getById = async (req: Request<IdParams>, res: Response) => {
  const car = await getCarById(req.params.id);
  return res.json(car);
};

export const listByBrand = async (req: Request<IdParams>, res: Response) => {
  const cars = await getCarsByBrand(req.params.id);
  return res.json(cars);
};

export const update = async (req: Request<IdParams>, res: Response) => {
  const car = await updateCar(req.params.id, req.body);
  return res.json(car);
};

export const remove = async (req: Request<IdParams>, res: Response) => {
  await deleteCar(req.params.id);
  return res.status(204).send();
};
