import { Router } from "express";
import { getStudents } from "../controllers/student";

const router = Router();

router.get("/student", getStudents);

export default router;
