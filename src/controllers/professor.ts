import { Request, Response } from "express";

import { Professor } from "../interfaces/professor";
import {
  deleteById,
  findProfessor,
  insert,
  update,
} from "../services/professor";

// Obtener todos los alumnos
export const getProfessor = async (req: Request, res: Response) => {
  try {
    // Obtener parámetros de la paginación con valores por defecto
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    // Calcular offset
    const offset = (page - 1) * limit;

    const professors = await findProfessor(limit, offset);
    res.status(200).json(professors);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error when obtaining professors: ", error });
  }
};

export const createProfessor = async (req: Request, res: Response) => {
  try {
    const professor: Professor = req.body;
    const newProfessor = await insert(professor);

    const io = req.app.get("io");
    io.emit("newProfessorData", newProfessor);
    res.status(201).json({ message: "Professor created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error when creating professor ", error });
  }
};

export const updateProfessor = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const professor: Professor = req.body;
    await update(id, professor);
    res.status(201).json({ message: "Professor uptdated successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error when updating professor ", error });
  }
};
export const deleteProfessor = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "Professor deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error when deleting professor: ", error });
  }
};
