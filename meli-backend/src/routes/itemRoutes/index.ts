import {
  getItemByIdController,
  getItemsController,
} from "@/controllers/itemController";
import { Router } from "express";

export const itemRoutes: Router = Router();

itemRoutes.route("/").get(getItemsController);
itemRoutes.route("/:idItem").get(getItemByIdController);
