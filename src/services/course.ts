import { Course } from "../interfaces/course";
import {
  deleteCourse,
  findAllCourses,
  insertCourse,
  updateCourse,
} from "../models/course";

export const findCourse = async (limit: number, offset: number) => {
  return await findAllCourses(limit, offset);
};

export const insert = async (professor: Course) => {
  return await insertCourse(professor);
};

export const update = async (id: number, professor: Course) => {
  return await updateCourse(id, professor);
};

export const deleteById = async (id: number) => {
  return await deleteCourse(id);
};
