import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const validationError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      status: 400,
      error: "Error de Validación",
      issuaes: err.errors.map((issue) => ({
        campo: issue.path.join("."),
        mensake: issue.message,
      })),
    });
  } else {
    // Si el error no es de Zod pasa al siguiente manejador de errores (error 500)
    next(err);
  }
};

export default validationError;
