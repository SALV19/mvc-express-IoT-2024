import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

const validate =
  (schema: ZodSchema<unknown>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // parsear la solicitud
      schema.parse(req.body);
      next(); // Validación exitosa
    } catch (error) {
      // Middleware de errores
      next(error);
    }
  };

export default validate;
