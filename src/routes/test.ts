import { NextFunction, Router, Request, Response } from "express";

const router = Router();

// Ruta que lanza un error
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  // Crea un error y pasalo al siguiente middleware
  const error = new Error("Error de priea");
  next(error);
});

export default router;
