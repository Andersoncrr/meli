import { Router } from "express";
import { itemRoutes } from "./itemRoutes";

export const router: Router = Router();

router.use("/items", itemRoutes);
