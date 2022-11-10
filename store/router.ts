import {Router, Request, Response, NextFunction} from "express";
import {requireAuth} from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get(
  "/",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const stores = await controller.list();
    res.json(stores);
  }
);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const modelstore = await controller.store(req.body);
    res.status(201).json(modelstore);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get(
  "/:id",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {id} = req.params;
      const store = await controller.getOne(id);
      res.json(store);
    } catch (error: any) {
      res.json({
        message: error.message,
      });
    }
  }
);

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    try {
      await controller.delete(id);
      res.status(204).json({});
    } catch (error: any) {
      if (error.name === "StoreExcepion") {
        res.status(400).json({
          message: error.message,
        });
      }
    }

    res.json({});
  }
);

router.patch(
  "/:id",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const store = await controller.update(req.params.id, req.body);
      res.status(200).json(store);
    } catch (error: any) {
      console.log("Error in file: router.ts", error);

      if (error.message == "store not found") {
        return res.status(404).json({
          message: error.message,
        });
      }
      res.status(500).json({
        message: error,
      });
    }
  }
);

export default router;
