import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../controllers/student";
import { studentSchema } from "../schemas/student";
import validate from "../middlewares/validate";

const router = Router();

router.get("/", getStudents);
router.post("/", validate(studentSchema), createStudent);
router.put("/:id", validate(studentSchema), updateStudent);
router.delete("/:id", deleteStudent);

export default router;
