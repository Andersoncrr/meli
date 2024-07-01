import { getItemsService } from "@/services/itemService";
import { NextFunction, Request, Response } from "express";

export const getItemsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const q = (req.query.q as string) || "";
    const limit = (req.query.limit as string) || "4";

    const items = await getItemsService(q, limit);

    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};
