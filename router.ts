import {Express} from "express";
import libraryRouter from "./library/router";
import authRouter from "./auth/router";
import bookRouter from "./book/router";
const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/library", libraryRouter);
  app.use("/book", bookRouter);
};

export default router;
