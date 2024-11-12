import { Router } from "express";
import { courseSchema } from "../schemas/course";
import validate from "../middlewares/validate";
import {
  createCourse,
  getCourses,
  deleteCourse,
  updateCourse,
} from "../controllers/course";

const router = Router();

router.get("/", getCourses);
router.post("/", validate(courseSchema), createCourse);
router.put("/:id", validate(courseSchema), updateCourse);
router.delete("/:id", deleteCourse);

export default router;
