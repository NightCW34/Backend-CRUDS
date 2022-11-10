import {Express} from "express";
import storeRouter from "./store/router";
import authRouter from "./auth/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/store", storeRouter);
};

export default router;
