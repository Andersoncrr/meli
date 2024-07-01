import { getItemByIdService } from "@/services/itemService";
import { NextFunction, Request, Response } from "express";

export const getItemByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idItem } = req.params;
    const item = await getItemByIdService(idItem);

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};
