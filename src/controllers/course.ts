import { Request, Response } from "express";
import { Course } from "../interfaces/course";
import { deleteById, findCourse, insert, update } from "../services/course";

// Obtener todos los alumnos
export const getCourses = async (req: Request, res: Response) => {
  try {
    // Obtener parámetros de la paginación con valores por defecto
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    // Calcular offset
    const offset = (page - 1) * limit;

    const courses = await findCourse(limit, offset);
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: "Error when obtaining courses: ", error });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const courses: Course = req.body;
    const newCourses = await insert(courses);

    const io = req.app.get("io");
    io.emit("newCourseData", newCourses);
    res.status(201).json({ message: "Course created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error when creating course ", error });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const course: Course = req.body;
    await update(id, course);
    res.status(201).json({ message: "Course uptdated successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error when updating course ", error });
  }
};
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "course deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error when deleting course: ", error });
  }
};
