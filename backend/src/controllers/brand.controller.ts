import type { Request, Response } from "express";
import {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
} from "../services/brand.service";

export const create = async (req: Request, res: Response) => {
  const brand = await createBrand(req.body);
  return res.status(201).json(brand);
};

export const list = async (req: Request, res: Response) => {
  const brands = await getBrands();
  return res.json(brands);
};

type BrandParams = {
  id: string;
};

export const getById = async (req: Request<BrandParams>, res: Response) => {
  const brand = await getBrandById(req.params.id);
  return res.json(brand);
};

export const update = async (req: Request<BrandParams>, res: Response) => {
  const brand = await updateBrand(req.params.id, req.body);
  return res.json(brand);
};

export const remove = async (req: Request<BrandParams>, res: Response) => {
  await deleteBrand(req.params.id);
  return res.status(204).send();
};
