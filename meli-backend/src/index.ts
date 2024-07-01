import dotenv from "dotenv";
import express, { Express } from "express";
import { router } from "@/routes";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

dotenv.config();

const app: Express = express();
app.use(express.json());

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});

app.use("/api", router);
app.use(errorHandlerMiddleware);
