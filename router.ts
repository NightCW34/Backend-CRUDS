import {Express} from "express";
import storeRouter from "./book/router";
import authRouter from "./auth/router";
import bookRouter from "./book/router";
const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/store", storeRouter);
  app.use("/book", bookRouter);
};

export default router;
